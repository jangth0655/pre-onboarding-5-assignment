import BoardSubTitle from 'components/search/board/boardSubTitle/BoardSubTitle';
import { useTerm } from 'hooks/useTerm';
import Word from '../word/Word';

const CurrentlyBoard = () => {
  const { terms } = useTerm();
  return (
    <ul>
      <BoardSubTitle title="추천검색어" />
      {terms.map((term) => (
        <Word key={term.sickCd} word={term.sickNm} />
      ))}
    </ul>
  );
};
export default CurrentlyBoard;
