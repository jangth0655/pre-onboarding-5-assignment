import Layout from 'components/Layout';
import { useState } from 'react';
import SearchBoard from './board/SearchBoard';
import SearchForm from './form/Form';
import Title from './title/Title';

const Search = () => {
  const [active, setActive] = useState(false);

  return (
    <Layout>
      <Title />
      <SearchForm setActive={setActive} />
      {active && <SearchBoard active={active} />}
    </Layout>
  );
};
export default Search;
