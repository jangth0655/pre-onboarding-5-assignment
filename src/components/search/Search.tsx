import Layout from 'components/Layout';
import { InputProvider } from 'context/InputContext';
import { CheckStoreProvider } from 'context/IsStoreContext';

import { useState } from 'react';
import SearchBoard from './board/SearchBoard';
import SearchForm from './form/Form';
import Title from './title/Title';

const Search = () => {
  const [showBoarder, setShowBoarder] = useState(false);

  return (
    <Layout>
      <Title />
      <CheckStoreProvider>
        <InputProvider>
          <SearchForm setShowBoarder={setShowBoarder} />
          {showBoarder && <SearchBoard showBoarder={showBoarder} />}
        </InputProvider>
      </CheckStoreProvider>
    </Layout>
  );
};
export default Search;
