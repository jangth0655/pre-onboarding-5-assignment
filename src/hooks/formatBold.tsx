export function makeBold(text: string, word: string) {
  const certain = text.split('').map((str, i) =>
    str === word ? (
      // eslint-disable-next-line react/no-array-index-key
      <b key={i} style={{ fontWeight: 'bold' }}>
        {word}
      </b>
    ) : (
      str
    )
  );
  return certain;
}
