// 단어 -> 보드 : 상태관리가 필요하다. (context api)
// ?클릭 -> 전체 레이아웃, 타이틀 클릭시 active 활성황 여부  (context api)

import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import SearchBoard from '../board/SearchBoard';
import S from './styles';

const SearchForm = () => {
  const [active, setActive] = useState(false);
  const [term, setTerm] = useState('');

  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTerm(value);
    setActive(true);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm('');
  };

  console.log(active);
  return (
    <>
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
      {active ? <SearchBoard /> : ''}
    </>
  );
};
export default SearchForm;
