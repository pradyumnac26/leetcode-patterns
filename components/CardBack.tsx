"use client";

import { memo } from "react";

import { LeetCodeLink } from "@/components/LeetCodeLink";

type CardBackProps = {
  indexLabel: string;
  id: string;
  subpattern: string;
  title: string;
  leetcodeUrl: string;
  codeHtmlLight: string;
  codeHtmlDark: string;
};

function titleSubpatternLabel(subpattern: string, id: string): string | null {
  const label = subpattern.trim();
  if (!label || label === id) return null;
  return label;
}

function CardBackInner({
  indexLabel,
  id,
  subpattern,
  title,
  leetcodeUrl,
  codeHtmlLight,
  codeHtmlDark,
}: CardBackProps) {
  const subpatternLabel = titleSubpatternLabel(subpattern, id);

  return (
    <div className="card-face card-face--back">
      <p className="card-face__index">{indexLabel}</p>
      <header className="card-face__title-row">
        <div className="card-face__title-group">
          <h2 className="card-face__title">{title}</h2>
          {subpatternLabel ? (
            <span className="card-face__slug">{subpatternLabel}</span>
          ) : null}
        </div>
      </header>

      <LeetCodeLink href={leetcodeUrl} />

      <p className="card-face__label card-face__label--solution">Solution</p>

      <div className="card-face__code">
        <div
          className="shiki-wrap shiki-wrap--light"
          dangerouslySetInnerHTML={{ __html: codeHtmlLight }}
        />
        <div
          className="shiki-wrap shiki-wrap--dark"
          dangerouslySetInnerHTML={{ __html: codeHtmlDark }}
        />
      </div>

      <p className="card-face__hint">Scroll for long code · tap header or footer to return</p>
    </div>
  );
}

export const CardBack = memo(CardBackInner);
