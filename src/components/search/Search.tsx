import Layout from 'components/Layout';
import SearchForm from './form/SearchForm';
import S from './styles';

const Search = () => {
  return (
    <Layout>
      <S.TitleContainer>
        <S.Title>국내 모든 임상시험 검색하고</S.Title>
        <S.Title>온라인으로 참여하기</S.Title>
      </S.TitleContainer>
      <SearchForm />
    </Layout>
  );
};
export default Search;
