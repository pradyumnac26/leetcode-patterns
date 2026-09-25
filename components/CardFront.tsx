import { memo } from "react";

import { LeetCodeLink } from "@/components/LeetCodeLink";
import { ProseContent, ProseWithInlineCode } from "@/components/ProseWithInlineCode";
import type { Card } from "@/lib/types";

type CardFrontProps = Pick<
  Card,
  | "id"
  | "title"
  | "leetcodeUrl"
  | "subpattern"
  | "summary"
  | "timeComplexity"
  | "timeComplexityExplanation"
  | "spaceComplexity"
  | "spaceComplexityExplanation"
> & {
  indexLabel: string;
};

function titleSubpatternLabel(subpattern: string, id: string): string | null {
  const label = subpattern.trim();
  if (!label || label === id) return null;
  return label;
}

function CardFrontInner({
  indexLabel,
  id,
  title,
  leetcodeUrl,
  subpattern,
  summary,
  timeComplexity,
  timeComplexityExplanation,
  spaceComplexity,
  spaceComplexityExplanation,
}: CardFrontProps) {
  const subpatternLabel = titleSubpatternLabel(subpattern, id);

  return (
    <div className="card-face card-face--front">
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

      <div className="card-face__scroll">
        <section className="card-face__section card-face__section--summary">
          <h3 className="card-face__label">Summary</h3>
          <ProseContent text={summary} />
        </section>

        {timeComplexity || spaceComplexity ? (
          <section
            className="card-face__section card-face__section--complexity"
            aria-label="Complexity"
          >
            <h3 className="card-face__label">Complexity</h3>
            <div className="card-face__complexity-stack">
              {timeComplexity ? (
                <article
                  className={`card-face__complexity-card${timeComplexityExplanation ? " card-face__complexity-card--with-note" : ""}`}
                >
                  <div className="card-face__complexity-head">
                    <span className="card-face__complexity-kind">Time</span>
                    <code className="card-face__complexity-val">{timeComplexity}</code>
                  </div>
                  {timeComplexityExplanation ? (
                    <ProseWithInlineCode
                      text={timeComplexityExplanation}
                      className="card-face__complexity-note"
                    />
                  ) : null}
                </article>
              ) : null}
              {spaceComplexity ? (
                <article
                  className={`card-face__complexity-card${spaceComplexityExplanation ? " card-face__complexity-card--with-note" : ""}`}
                >
                  <div className="card-face__complexity-head">
                    <span className="card-face__complexity-kind">Space</span>
                    <code className="card-face__complexity-val">{spaceComplexity}</code>
                  </div>
                  {spaceComplexityExplanation ? (
                    <ProseWithInlineCode
                      text={spaceComplexityExplanation}
                      className="card-face__complexity-note"
                    />
                  ) : null}
                </article>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>

      <p className="card-face__hint">Tap for solution · swipe for next card</p>
    </div>
  );
}

export const CardFront = memo(CardFrontInner);
