import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSubpatternById,
  getSubpatternProblems,
  getProblemBySlug,
  getAllSlugs,
} from "@/lib/problems";
import { getRawContent } from "@/lib/content";
import { MdxBody } from "@/components/MdxBody";
import { Difficulty, Approach } from "@/lib/types";
import matter from "gray-matter";

const difficultyClass: Record<Difficulty, string> = {
  Easy: "diff-easy",
  Medium: "diff-medium",
  Hard: "diff-hard",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProblemPage({ params }: PageProps) {
  const { slug } = await params;
  const problem = getProblemBySlug(slug);
  if (!problem) notFound();

  const subpattern = getSubpatternById(problem.subpattern);
  const siblings = getSubpatternProblems(problem.subpattern);
  const index = siblings.findIndex((p) => p.id === slug);
  const prev = index > 0 ? siblings[index - 1] : null;
  const next = index < siblings.length - 1 ? siblings[index + 1] : null;
  const raw = getRawContent(slug);
  const body = raw ? matter(raw).content.trim() : "";

  return (
    <div className="detail-page">
      <div className="detail-shell">
        <Link href="/" className="detail-back">
          ← Back to table
        </Link>

        <h1 className="detail-title">{problem.title}</h1>

        <div className="detail-panel">
          <div className="detail-panel-tab">Revision notes</div>
          <div className="detail-panel-body">
            <p className="detail-meta">
              {subpattern && <span>{subpattern.name}</span>}
              {problem.difficulty && (
                <>
                  {subpattern && " · "}
                  <span className={difficultyClass[problem.difficulty]}>
                    {problem.difficulty}
                  </span>
                </>
              )}
            </p>

            <p className="detail-url">
              <a
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link"
              >
                {problem.url}
              </a>
            </p>

            {problem.clarifyingQuestions.length > 0 && (
              <div className="clarify-block">
                <h2 className="clarify-block-title">Questions to clarify</h2>
                <ul className="clarify-list">
                  {problem.clarifyingQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
            )}

            <ApproachBlock
              label="Brute force approach"
              approach={problem.brute}
              variant="brute"
            />

            <ApproachBlock
              label="Optimal approach"
              approach={problem.optimal}
              variant="optimal"
            />

            <hr className="detail-divider" />

            <h2 className="detail-heading detail-heading-pitfalls">Pitfalls to watch for</h2>
            <p className="detail-body-text pitfalls-text">{problem.pitfalls}</p>

            {body && (
              <>
                <hr className="detail-divider" />
                <h2 className="detail-heading">Additional notes</h2>
                <MdxBody source={body} />
              </>
            )}

            {problem.video && (
              <>
                <hr className="detail-divider" />
                <h2 className="detail-heading">Video walkthrough</h2>
                <div className="video-wrap">
                  <iframe
                    src={problem.video}
                    title={`${problem.title} walkthrough`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            )}

          </div>
        </div>

        {(prev || next) && (
          <nav className="detail-sibling-nav">
            {prev ? (
              <Link href={`/problems/${prev.id}`} className="detail-sibling-link">
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/problems/${next.id}`} className="detail-sibling-link">
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </div>
    </div>
  );
}

function ApproachBlock({
  label,
  approach,
  variant,
}: {
  label: string;
  approach: Approach;
  variant: "brute" | "optimal";
}) {
  return (
    <div className={`approach-block approach-block-${variant}`}>
      <h2 className="approach-block-title">{label}</h2>
      <p className="approach-block-summary">{approach.summary}</p>
      <div className="approach-block-cx">
        <div className="approach-cx-item">
          <span className="approach-cx-label">Time</span>
          <code className="approach-cx-value">{approach.time}</code>
        </div>
        <div className="approach-cx-item">
          <span className="approach-cx-label">Space</span>
          <code className="approach-cx-value">{approach.space}</code>
        </div>
      </div>
    </div>
  );
}
