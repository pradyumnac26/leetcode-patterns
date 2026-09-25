"use client";

type LeetCodeLinkProps = {
  href: string;
  className?: string;
};

export function LeetCodeLink({ href, className = "" }: LeetCodeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-face__link ${className}`.trim()}
      onClick={(event) => event.stopPropagation()}
      onPointerDown={(event) => event.stopPropagation()}
      onPointerUp={(event) => event.stopPropagation()}
    >
      <span className="card-face__link-icon" aria-hidden>
        ↗
      </span>
      Open on LeetCode
    </a>
  );
}
