import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  word: string;
}

const Word: React.FC<Props> = ({ word }) => {
  return (
    <S.TermContainer>
      <S.IconBox>
        <BiSearch />
      </S.IconBox>
      <S.Term>{word}</S.Term>
    </S.TermContainer>
  );
};
export default Word;
