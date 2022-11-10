import localData from 'api/cacheApi';
import Client from 'api/clientApi';
import SearchApi from 'api/searchApi';
import { Sick } from 'model/interface';
import React, { createContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type Term = {
  search: (term: string) => void;
  terms: Sick[];
  term: string;
};

export const InputContext = createContext<Term | null>(null);

const client = new Client();
const searchApi = new SearchApi(client);

const recentlyWords = localData.previewData();
export const InputProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [terms, setTerms] = useState<Sick[]>([]);

  const search = (term: string) => {
    setTerm(term);
  };

  function timing() {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  async function searchAPICall(term: string) {
    const result = await searchApi.sickSearch(term);
    setTerms([...result.slice(0, 10)]);
  }

  const storedWord = recentlyWords.includes(term);

  useEffect(() => {
    if (!term) return;
    timing();
    if (!isLoading && !storedWord) {
      console.log('call api');
      searchAPICall(term);
    }
  }, [searchApi, term, isLoading]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <InputContext.Provider value={{ search, terms, term }}>
      {children}
    </InputContext.Provider>
  );
};
