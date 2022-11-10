import S from './styles';

interface Props {
  title: string;
}

const BoardSubTitle: React.FC<Props> = ({ title }) => {
  return (
    <S.BoardSubContainer>
      <S.BoardSubText>{title}</S.BoardSubText>
    </S.BoardSubContainer>
  );
};

export default BoardSubTitle;
