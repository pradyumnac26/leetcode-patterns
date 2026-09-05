"use client";

import { useEffect, useRef, useState } from "react";
import { Difficulty } from "@/lib/types";
import {
  DIFFICULTIES,
  FilterMatchMode,
  ProblemFilters as Filters,
} from "@/lib/filters";

const difficultyClass: Record<Difficulty, string> = {
  Easy: "diff-easy",
  Medium: "diff-medium",
  Hard: "diff-hard",
};

type ProblemFiltersProps = {
  filters: Filters;
  matchMode: FilterMatchMode;
  companies: string[];
  onToggleDifficulty: (difficulty: Difficulty) => void;
  onToggleCompany: (company: string) => void;
  onMatchModeChange: (mode: FilterMatchMode) => void;
  onClear: () => void;
};

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2.5 14V4.5L8 2L13.5 4.5V14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 14V10.5H10.5V14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path d="M5.5 6H6M5.5 8.25H6M8 6H8.5M8 8.25H8.5M10 6H10.5M10 8.25H10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function DifficultyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 4H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 8H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

type FilterDropdownProps<T extends string> = {
  id: string;
  placeholder: string;
  options: T[];
  selected: T[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: (value: T) => void;
  getOptionClassName?: (value: T) => string;
};

function FilterDropdown<T extends string>({
  id,
  placeholder,
  options,
  selected,
  open,
  onOpen,
  onClose,
  onToggle,
  getOptionClassName,
}: FilterDropdownProps<T>) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const label =
    selected.length === 0
      ? placeholder
      : selected.length === 1
        ? selected[0]
        : `${selected.length} selected`;

  return (
    <div className="filter-dropdown" ref={rootRef}>
      <button
        type="button"
        id={id}
        className={`filter-dropdown-trigger${open ? " open" : ""}${selected.length > 0 ? " has-value" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
      >
        <span className="filter-dropdown-label">{label}</span>
        <ChevronDown />
      </button>

      {open && (
        <div className="filter-dropdown-menu" role="listbox" aria-labelledby={id}>
          {options.length === 0 ? (
            <p className="filter-dropdown-empty">No options available</p>
          ) : (
            options.map((option) => {
              const checked = selected.includes(option);
              return (
                <label
                  key={option}
                  className="filter-dropdown-option"
                  role="option"
                  aria-selected={checked}
                >
                  <input
                    type="checkbox"
                    className="filter-dropdown-checkbox"
                    checked={checked}
                    onChange={() => onToggle(option)}
                  />
                  <span
                    className={`filter-dropdown-option-text${getOptionClassName ? ` ${getOptionClassName(option)}` : ""}`}
                  >
                    {option}
                  </span>
                </label>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export function ProblemFilters({
  filters,
  matchMode,
  companies,
  onToggleDifficulty,
  onToggleCompany,
  onMatchModeChange,
  onClear,
}: ProblemFiltersProps) {
  const [openDropdown, setOpenDropdown] = useState<"companies" | "difficulty" | "match" | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const hasFilters =
    filters.difficulties.length > 0 || filters.companies.length > 0;

  const closeDropdowns = () => setOpenDropdown(null);

  useEffect(() => {
    if (!openDropdown) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) {
        closeDropdowns();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDropdowns();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  return (
    <div className="filter-panel" ref={panelRef}>
      <div className="filter-panel-header">
        <span>Match</span>
        <div className="filter-match-wrap">
          <button
            type="button"
            className={`filter-match-trigger${openDropdown === "match" ? " open" : ""}`}
            aria-haspopup="listbox"
            aria-expanded={openDropdown === "match"}
            onClick={() =>
              setOpenDropdown((prev) => (prev === "match" ? null : "match"))
            }
          >
            {matchMode === "all" ? "All" : "Any"}
            <ChevronDown />
          </button>
          {openDropdown === "match" && (
            <div className="filter-match-menu" role="listbox">
              {(["all", "any"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  role="option"
                  aria-selected={matchMode === mode}
                  className={`filter-match-option${matchMode === mode ? " selected" : ""}`}
                  onClick={() => {
                    onMatchModeChange(mode);
                    closeDropdowns();
                  }}
                >
                  {mode === "all" ? "All" : "Any"}
                </button>
              ))}
            </div>
          )}
        </div>
        <span>of the following filters:</span>
      </div>

      <div className="filter-panel-rows">
        <div className="filter-criterion">
          <div className="filter-criterion-label">
            <span className="filter-criterion-icon filter-criterion-icon-companies">
              <BuildingIcon />
            </span>
            <span className="filter-criterion-name">Companies</span>
          </div>
          <div className="filter-criterion-controls">
            <div className="filter-operator">is</div>
            <FilterDropdown
              id="filter-companies"
              placeholder="Select..."
              options={companies}
              selected={filters.companies}
              open={openDropdown === "companies"}
              onOpen={() => setOpenDropdown("companies")}
              onClose={closeDropdowns}
              onToggle={onToggleCompany}
            />
          </div>
        </div>

        <div className="filter-criterion">
          <div className="filter-criterion-label">
            <span className="filter-criterion-icon filter-criterion-icon-difficulty">
              <DifficultyIcon />
            </span>
            <span className="filter-criterion-name">Difficulty</span>
          </div>
          <div className="filter-criterion-controls">
            <div className="filter-operator">is</div>
            <FilterDropdown
              id="filter-difficulty"
              placeholder="Select..."
              options={DIFFICULTIES}
              selected={filters.difficulties}
              open={openDropdown === "difficulty"}
              onOpen={() => setOpenDropdown("difficulty")}
              onClose={closeDropdowns}
              onToggle={onToggleDifficulty}
              getOptionClassName={(value) => difficultyClass[value as Difficulty]}
            />
          </div>
        </div>
      </div>

      {hasFilters && (
        <button type="button" className="filter-clear" onClick={onClear}>
          Clear filters
        </button>
      )}
    </div>
  );
}
