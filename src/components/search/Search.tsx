import Layout from 'components/Layout';
import SearchBoard from './board/SearchBoard';
import SearchForm from './form/Form';
import Title from './title/Title';

const Search = () => {
  return (
    <Layout>
      <Title />
      <SearchForm />
      <SearchBoard />
    </Layout>
  );
};
export default Search;
