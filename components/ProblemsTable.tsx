"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Problem, Difficulty } from "@/lib/types";
import { SubPattern } from "@/lib/subpatterns";

const difficultyClass: Record<Difficulty, string> = {
  Easy: "diff-easy",
  Medium: "diff-medium",
  Hard: "diff-hard",
};

type ProblemsTableProps = {
  subpatterns: SubPattern[];
  getProblems: (subpatternId: string) => Problem[];
  expanded: Record<string, boolean>;
  onToggle: (subpatternId: string) => void;
  searching?: boolean;
};

export function ProblemsTable({
  subpatterns,
  getProblems,
  expanded,
  onToggle,
  searching = false,
}: ProblemsTableProps) {
  const router = useRouter();

  return (
    <div className="sections">
      {subpatterns.map((subpattern) => {
        const problems = getProblems(subpattern.id);
        const isOpen = searching ? true : (expanded[subpattern.id] ?? false);

        return (
          <section key={subpattern.id} className="section">
            <button
              onClick={() => onToggle(subpattern.id)}
              className="section-toggle"
            >
              <Chevron open={isOpen} />
              {subpattern.name}
              <span className="section-count">{problems.length}</span>
            </button>

            {isOpen && (
              <div className="table-card">
                <table className="tbl tbl-list">
                  <thead>
                    <tr>
                      <th className="th-num">#</th>
                      <th className="th-problem">Problem</th>
                      <th className="th-companies">Companies</th>
                      <th className="th-diff">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {problems.map((problem, i) => (
                      <tr
                        key={problem.id}
                        className="row-clickable"
                        onClick={() => router.push(`/problems/${problem.id}`)}
                      >
                        <td className="cell-num">{i + 1}</td>
                        <td className="cell-problem">
                          <span className="problem-title-wrap">
                            <span className="problem-link">{problem.title}</span>
                            <span className="notes-icon" title="View notes">
                              <NotesIcon />
                            </span>
                          </span>
                        </td>
                        <td className="cell-companies">
                          <CompanyTags companies={problem.companies} />
                        </td>
                        <td className="cell-diff">
                          {problem.difficulty && (
                            <span
                              className={`diff-badge ${difficultyClass[problem.difficulty]}`}
                            >
                              {problem.difficulty}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

const VISIBLE_COMPANIES = 2;

function CompanyTags({ companies }: { companies?: string[] }) {
  const [expanded, setExpanded] = useState(false);

  if (!companies?.length) return null;

  const hiddenCount = companies.length - VISIBLE_COMPANIES;
  const hasHidden = hiddenCount > 0;
  const visible = expanded || !hasHidden
    ? companies
    : companies.slice(0, VISIBLE_COMPANIES);
  const hiddenNames = hasHidden ? companies.slice(VISIBLE_COMPANIES).join(", ") : "";

  return (
    <div
      className="company-tags"
      onClick={(e) => e.stopPropagation()}
    >
      {visible.map((company) => (
        <span key={company} className="company-tag">
          {company}
        </span>
      ))}
      {hasHidden && !expanded && (
        <button
          type="button"
          className="company-more"
          title={hiddenNames}
          aria-label={`Show ${hiddenCount} more: ${hiddenNames}`}
          onClick={() => setExpanded(true)}
        >
          +{hiddenCount}
        </button>
      )}
      {hasHidden && expanded && (
        <button
          type="button"
          className="company-more company-more-collapse"
          onClick={() => setExpanded(false)}
        >
          less
        </button>
      )}
    </div>
  );
}

function NotesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3.5 2h4.5L11 4v7.5A1 1 0 0 1 10 12.5H3.5A1 1 0 0 1 2.5 11.5v-8A1 1 0 0 1 3.5 2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 2v2.5H11M5 6.5h4M5 8.5h4M5 10.5h2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 10 10"
      className={`chevron${open ? " open" : ""}`}
    >
      <path
        d="M3 1L7 5L3 9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
