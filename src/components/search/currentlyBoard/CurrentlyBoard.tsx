import BoardSubTitle from 'components/search/board/boardSubTitle/BoardSubTitle';
import { useTerm } from 'hooks/useTerm';
import Word from '../word/Word';

const CurrentlyBoard = () => {
  const { terms } = useTerm();
  const isSearchWord = terms.length !== 0;
  return (
    <ul>
      <BoardSubTitle title="추천검색어" />
      {isSearchWord
        ? terms.map((term) => <Word key={term.sickCd} word={term.sickNm} />)
        : '검색어가 없습니다.'}
    </ul>
  );
};
export default CurrentlyBoard;
