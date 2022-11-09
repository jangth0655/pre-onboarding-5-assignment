import React from 'react';
import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  term: number;
}

const Term: React.FC<Props> = ({ term }) => {
  return (
    <S.TermContainer>
      <S.IconBox>
        <BiSearch />
      </S.IconBox>
      <S.Term>{term}</S.Term>
    </S.TermContainer>
  );
};
export default Term;
