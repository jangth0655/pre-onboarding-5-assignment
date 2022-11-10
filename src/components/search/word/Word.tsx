import { makeBold } from 'hooks/formatBold';
import { useWord } from 'hooks/useWord';
import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  text: string;
}

const Word: React.FC<Props> = ({ text }) => {
  const { word } = useWord();

  return (
    <S.TermContainer>
      <S.IconBox>
        <BiSearch />
      </S.IconBox>
      <S.TermContainer>{makeBold(text, word)}</S.TermContainer>
    </S.TermContainer>
  );
};
export default Word;
