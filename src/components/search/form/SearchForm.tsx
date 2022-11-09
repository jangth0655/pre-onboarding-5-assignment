import { BiSearch } from 'react-icons/bi';
import SearchBoard from '../board/SearchBoard';
import S from './styles';

const SearchForm = () => {
  return (
    <>
      <S.Form>
        <S.IconBox>
          <BiSearch />
        </S.IconBox>
        <S.Input type="text" placeholder="질환명을 입력해주세요." />
        <S.Button type="button">검색</S.Button>
      </S.Form>
      <SearchBoard />
    </>
  );
};
export default SearchForm;
