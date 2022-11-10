import { useTerm } from 'hooks/useTerm';
import Term from '../term/Term';
import BoardSubTitle from './boardSubTitle/BoardSubTitle';
import S from './styles';

interface Props {
  active: boolean;
}

const SearchBoard: React.FC<Props> = ({ active }) => {
  const { terms } = useTerm();
  const emptyTerms = terms.length === 0;

  return (
    <S.Container>
      <BoardSubTitle title="추천 검색어" />
      <ul>
        {emptyTerms
          ? '검색어 없음'
          : terms.map((term) => <Term key={term.sickCd} term={term.sickNm} />)}
      </ul>
    </S.Container>
  );
};
export default SearchBoard;
