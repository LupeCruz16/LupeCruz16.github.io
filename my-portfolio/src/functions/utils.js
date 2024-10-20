// Helper function to underline specific words or phrases
export const underlineText = (text, underlineWords) => {
  if (!underlineWords || underlineWords.length === 0) return text;

  const regex = new RegExp(`(${underlineWords.join('|')})`, 'gi');
  return text.split(regex).map((part, index) =>
    underlineWords.includes(part) ? (
      <span key={index} className="underline">
        {part}
      </span>
    ) : (
      part
    )
  );
};
