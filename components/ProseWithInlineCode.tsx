type TextPart = { type: "text"; value: string };
type CodePart = { type: "code"; value: string };
type Part = TextPart | CodePart;

function parseInlineCode(text: string): Part[] {
  const parts: Part[] = [];
  const re = /`([^`]+)`/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: "code", value: match[1] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", value: text.slice(lastIndex) });
  }

  return parts.length > 0 ? parts : [{ type: "text", value: text }];
}

export function InlineCodeContent({ text }: { text: string }) {
  const parts = parseInlineCode(text);

  return (
    <>
      {parts.map((part, index) =>
        part.type === "code" ? (
          <code key={index} className="card-face__inline-code">
            {part.value}
          </code>
        ) : (
          <span key={index}>{part.value}</span>
        ),
      )}
    </>
  );
}

type ProseWithInlineCodeProps = {
  text: string;
  className?: string;
};

export function ProseWithInlineCode({ text, className }: ProseWithInlineCodeProps) {
  return (
    <p className={className}>
      <InlineCodeContent text={text} />
    </p>
  );
}

type ProseContentProps = {
  text: string;
  className?: string;
};

export function ProseContent({ text, className = "card-face__text" }: ProseContentProps) {
  const blocks = text.trim().split(/\n\n+/);

  return (
    <div className="card-face__prose">
      {blocks.map((block, blockIndex) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const isList = lines.length > 0 && lines.every((line) => line.startsWith("- "));

        if (isList) {
          return (
            <ul key={blockIndex} className="card-face__list card-face__list--prose">
              {lines.map((line, lineIndex) => (
                <li key={lineIndex}>
                  <InlineCodeContent text={line.slice(2)} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <ProseWithInlineCode
            key={blockIndex}
            text={block.trim()}
            className={className}
          />
        );
      })}
    </div>
  );
}
