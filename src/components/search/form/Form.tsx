// 클릭 -> 전체 레이아웃, 타이틀 클릭시 active 활성황 여부

import { useTerm } from 'hooks/useTerm';
import React, { useMemo, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchForm: React.FC<Props> = ({ setActive }) => {
  const [term, setTerm] = useState('');
  const { search } = useTerm();
  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTerm(value);
    search(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.IconBox>
        <BiSearch />
      </S.IconBox>
      <S.Input
        onClick={() => setActive(true)}
        onChange={handleInputEvent}
        value={term}
        type="text"
        placeholder="질환명을 입력해주세요."
      />
      <S.Button>검색</S.Button>
    </S.Form>
  );
};
export default SearchForm;
