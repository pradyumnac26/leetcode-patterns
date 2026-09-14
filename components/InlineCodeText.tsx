import Link from "next/link";

type InlineCodeTextProps = {
  text: string;
  className?: string;
};

const TOKEN_PATTERN = /(`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function InlineCodeText({ text, className }: InlineCodeTextProps) {
  const parts = text.split(TOKEN_PATTERN);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={index} className="inline-code">
              {part.slice(1, -1)}
            </code>
          );
        }

        const linkMatch = part.match(LINK_PATTERN);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          if (href.startsWith("/")) {
            return (
              <Link key={index} href={href} className="detail-link">
                {label}
              </Link>
            );
          }

          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link"
            >
              {label}
            </a>
          );
        }

        return part;
      })}
    </span>
  );
}
