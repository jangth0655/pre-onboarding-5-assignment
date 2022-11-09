import { useTerm } from 'hooks/useTerm';
import Term from '../term/Term';
import S from './styles';

interface Props {
  active: boolean;
}

const SearchBoard: React.FC<Props> = ({ active }) => {
  const { terms } = useTerm();

  return (
    <S.Container>
      <S.SuggestedTermContainer>
        <S.SuggestedTerm>추천 검색어</S.SuggestedTerm>
      </S.SuggestedTermContainer>
      <ul>
        {terms.map((term) => (
          <Term key={term.sickCd} term={term.sickNm} />
        ))}
      </ul>
    </S.Container>
  );
};
export default SearchBoard;
