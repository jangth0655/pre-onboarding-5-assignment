import { useTerm } from 'hooks/useTerm';
import Term from '../term/Term';
import S from './styles';

interface Props {
  active: boolean;
}

const SearchBoard: React.FC<Props> = ({ active }) => {
  const { terms } = useTerm();
  const emptyTerms = terms.length === 0;

  return (
    <S.Container>
      <S.SuggestedTermContainer>
        <S.SuggestedTerm>추천 검색어</S.SuggestedTerm>
      </S.SuggestedTermContainer>
      <ul>
        {emptyTerms
          ? '입력해주세요.'
          : terms.map((term) => <Term key={term.sickCd} term={term.sickNm} />)}
      </ul>
    </S.Container>
  );
};
export default SearchBoard;
