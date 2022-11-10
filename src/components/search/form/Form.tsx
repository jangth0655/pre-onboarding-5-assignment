// 클릭 -> 전체 레이아웃, 타이틀 클릭시 active 활성황 여부

import localData from 'api/cacheApi';
import { useStore, useTerm } from 'hooks/useTerm';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const recentlyWords = localData.previewData();
const SearchForm: React.FC<Props> = ({ setActive }) => {
  const [term, setTerm] = useState('');
  const { search } = useTerm();
  const { isStore } = useStore();

  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    recentlyWords.includes(value) ? isStore() : search(value);
    setTerm(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm('');
    if (!term && term === '') return;
    localData.addData(term);
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
