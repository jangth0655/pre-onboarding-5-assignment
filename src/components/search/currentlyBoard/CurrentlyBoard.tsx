import BoardSubTitle from 'components/search/board/boardSubTitle/BoardSubTitle';
import useKeyPress from 'hooks/useKeyPress';
import { useWord } from 'hooks/useWord';
import { useEffect } from 'react';
import Word from '../word/Word';

const CurrentlyBoard = () => {
  const { words } = useWord();
  const DownKeypress = useKeyPress({ targetKey: 'ArrowDown' });
  // const UpKeypress = useKeyPress({ targetKey: 'ArrowUp' });
  const isSearchWord = words.length !== 0;

  console.log(DownKeypress);

  return (
    <ul>
      <BoardSubTitle title="추천검색어" />
      {isSearchWord
        ? words.map((word) => <Word key={word.sickCd} text={word.sickNm} />)
        : '검색어가 없습니다.'}
    </ul>
  );
};
export default CurrentlyBoard;
