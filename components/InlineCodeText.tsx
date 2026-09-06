type InlineCodeTextProps = {
  text: string;
  className?: string;
};

export function InlineCodeText({ text, className }: InlineCodeTextProps) {
  const parts = text.split(/(`[^`]+`)/g);

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
        return part;
      })}
    </span>
  );
}
