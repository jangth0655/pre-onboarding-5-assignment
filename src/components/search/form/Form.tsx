import storage from 'api/cacheApi';
import { useWord } from 'hooks/useWord';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import S from './styles';

interface Props {
  setShowBoarder: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchForm: React.FC<Props> = ({ setShowBoarder }) => {
  const [word, setWord] = useState('');
  const { search } = useWord();

  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    search(value);
    setWord(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWord('');
    if (!word && word === '') return;
    storage.addData(word);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.IconBox>
        <BiSearch />
      </S.IconBox>
      <S.Input
        onClick={() => setShowBoarder((prev) => !prev)}
        onChange={handleInputEvent}
        value={word}
        type="text"
        placeholder="질환명을 입력해주세요."
      />
      <S.Button>검색</S.Button>
    </S.Form>
  );
};
export default SearchForm;
