import { makeBold } from 'hooks/formatBold';
import { useWord } from 'hooks/useWord';
import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  text: string;
  active?: boolean;
}

const Word: React.FC<Props> = ({ text, active }) => {
  const { word } = useWord();

  return (
    <S.TermContainer active={active}>
      <S.IconBox>
        <BiSearch />
      </S.IconBox>
      <S.TermContainer>
        <S.Term>{makeBold(text, word)}</S.Term>
      </S.TermContainer>
    </S.TermContainer>
  );
};
export default Word;
