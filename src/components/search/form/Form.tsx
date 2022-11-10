import storage from 'api/cacheApi';
import { useWord } from 'hooks/useWord';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchForm: React.FC<Props> = ({ setActive }) => {
  const [term, setTerm] = useState('');
  const { search } = useWord();

  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    search(value);
    setTerm(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm('');
    if (!term && term === '') return;
    storage.addData(term);
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
