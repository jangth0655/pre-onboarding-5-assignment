export function makeBold(text: string, word: string) {
  const textSplit = text.split('');
  const filterBoldText = textSplit.map((string, i) =>
    string === word ? (
      // eslint-disable-next-line react/no-array-index-key
      <b key={i} style={{ fontWeight: 'bold' }}>
        {word}
      </b>
    ) : (
      string
    )
  );
  return filterBoldText;
}
