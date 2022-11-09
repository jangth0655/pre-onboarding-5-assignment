import Term from '../term/Term';
import S from './styles';

const array = [1, 2];

interface Props {
  active: boolean;
}

const SearchBoard: React.FC<Props> = ({ active }) => {
  return (
    <S.Container>
      <S.SuggestedTermContainer>
        <S.SuggestedTerm>추천 검색어</S.SuggestedTerm>
      </S.SuggestedTermContainer>
      <ul>
        {array.map((v) => (
          <Term key={v} term={v} />
        ))}
      </ul>
    </S.Container>
  );
};
export default SearchBoard;
