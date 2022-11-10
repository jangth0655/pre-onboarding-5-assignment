import BoardSubTitle from 'components/search/board/boardSubTitle/BoardSubTitle';
import useKeyPress from 'hooks/useKeyPress';
import { useWord } from 'hooks/useWord';
import { useEffect, useState } from 'react';
import Word from '../word/Word';

const CurrentlyBoard = () => {
  const { words } = useWord();
  const downPress = useKeyPress({ targetKey: 'ArrowDown' });
  const upPress = useKeyPress({ targetKey: 'ArrowUp' });
  const [cursor, setCursor] = useState(0);
  const isSearchWord = words.length !== 0;

  useEffect(() => {
    if (words.length && downPress) {
      setCursor((prevState) =>
        prevState < words.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (words.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  return (
    <ul>
      <BoardSubTitle title="추천검색어" />
      {isSearchWord
        ? words.map((word, i) => (
            <Word key={word.sickCd} active={i === cursor} text={word.sickNm} />
          ))
        : '검색어가 없습니다.'}
    </ul>
  );
};
export default CurrentlyBoard;
