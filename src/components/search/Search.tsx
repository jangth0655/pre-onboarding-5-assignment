import Layout from 'components/Layout';
import { TermProvider } from 'context/termContext';
import { useState } from 'react';
import SearchBoard from './board/SearchBoard';
import SearchForm from './form/Form';
import Title from './title/Title';

const Search = () => {
  const [active, setActive] = useState(false);

  return (
    <Layout>
      <Title />
      <TermProvider>
        <SearchForm setActive={setActive} />
        {active && <SearchBoard active={active} />}
      </TermProvider>
    </Layout>
  );
};
export default Search;
