"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AppData, Difficulty } from "@/lib/types";
import { getProblemsBySubpattern, getVisibleSubpatterns } from "@/lib/helpers";
import { getSubPatternById } from "@/lib/subpatterns";
import {
  FilterMatchMode,
  getUniqueCompanies,
  hasActiveFilters,
  problemMatchesFilters,
  ProblemFilters as Filters,
} from "@/lib/filters";
import { problemMatchesSearch } from "@/lib/search";
import { ProblemFilters } from "@/components/ProblemFilters";
import { ProblemsTable } from "@/components/ProblemsTable";

type HomeClientProps = {
  data: AppData;
  problemCount: number;
};

const EMPTY_FILTERS: Filters = { difficulties: [], companies: [] };

export function HomeClient({ data, problemCount }: HomeClientProps) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [matchMode, setMatchMode] = useState<FilterMatchMode>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const filterAnchorRef = useRef<HTMLDivElement>(null);

  const companies = useMemo(
    () => getUniqueCompanies(data.problems),
    [data.problems]
  );

  const isFiltering = !!search.trim() || hasActiveFilters(filters);

  const filteredCount = useMemo(() => {
    const q = search.toLowerCase().trim();
    return data.problems.filter((problem) => {
      if (!problemMatchesFilters(problem, filters, matchMode)) return false;
      if (!q) return true;
      return problemMatchesSearch(problem, q);
    }).length;
  }, [data.problems, filters, matchMode, search]);

  const getProblems = (subpatternId: string) => {
    const problems = getProblemsBySubpattern(data.problems, subpatternId);
    const q = search.toLowerCase().trim();
    const subpattern = getSubPatternById(subpatternId);

    return problems.filter((problem) => {
      if (!problemMatchesFilters(problem, filters, matchMode)) return false;
      if (!q) return true;
      return (
        problemMatchesSearch(problem, q) ||
        subpattern?.name.toLowerCase().includes(q)
      );
    });
  };

  const filteredSubpatterns = useMemo(() => {
    return getVisibleSubpatterns(data.subpatterns, (subpatternId) =>
      getProblems(subpatternId).length > 0
    );
  }, [data.subpatterns, isFiltering, filters, matchMode, search, data.problems]);

  const toggleDifficulty = (difficulty: Difficulty) => {
    setFilters((prev) => ({
      ...prev,
      difficulties: prev.difficulties.includes(difficulty)
        ? prev.difficulties.filter((d) => d !== difficulty)
        : [...prev.difficulties, difficulty],
    }));
  };

  const toggleCompany = (company: string) => {
    setFilters((prev) => ({
      ...prev,
      companies: prev.companies.includes(company)
        ? prev.companies.filter((c) => c !== company)
        : [...prev.companies, company],
    }));
  };

  const clearFilters = () => setFilters(EMPTY_FILTERS);

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (!filtersOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!filterAnchorRef.current?.contains(event.target as Node)) {
        setFiltersOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFiltersOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filtersOpen]);

  return (
    <div className="min-h-screen">
      <div className="page-shell">
        <header className="page-header">
          <h1 className="page-title">DSA Pattern Notes</h1>
          <p className="page-subtitle">
            LeetCode ·{" "}
            {isFiltering
              ? `${filteredCount} of ${problemCount} problems`
              : `${problemCount} problems`}
          </p>
        </header>

        <aside className="intro-banner" aria-label="About this site">
          <p className="intro-banner-body">
            <span className="intro-banner-emoji" aria-hidden>
              📝
            </span>
            Pattern-wise revision notes grouped by technique family — clarifying
            questions, approaches, and pitfalls for each problem.
          </p>
          <p className="intro-banner-body">
            <span className="intro-banner-emoji" aria-hidden>
              🧩
            </span>
            LeetCode &amp; DSA for now. LLD and HLD sections coming later.
          </p>
        </aside>

        <div className="search-bar">
          <div className="search-wrap">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-anchor" ref={filterAnchorRef}>
            <button
              type="button"
              className={`filter-toggle${filtersOpen ? " open" : ""}${hasActiveFilters(filters) ? " active" : ""}`}
              aria-label="Filter problems"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4.5 8H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6.5 12H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {filtersOpen && (
              <ProblemFilters
                filters={filters}
                matchMode={matchMode}
                companies={companies}
                onToggleDifficulty={toggleDifficulty}
                onToggleCompany={toggleCompany}
                onMatchModeChange={setMatchMode}
                onClear={clearFilters}
              />
            )}
          </div>
        </div>

        <ProblemsTable
          subpatterns={filteredSubpatterns}
          getProblems={getProblems}
          expanded={expanded}
          onToggle={toggleExpanded}
          searching={isFiltering}
        />
      </div>
    </div>
  );
}
