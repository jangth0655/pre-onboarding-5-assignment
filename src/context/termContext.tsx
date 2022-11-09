import Client from 'api/client';
import SearchApi from 'api/searchApi';
import { Sick } from 'model/interface';
import React, { createContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type Term = {
  search: (term: string) => void;
  terms: Sick[];
};

export const TermContext = createContext<Term | null>(null);

const client = new Client();
const searchApi = new SearchApi(client);

export const TermProvider: React.FC<Props> = ({ children }) => {
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

  async function searchAPICall() {
    const result = await searchApi.sickSearch(term);
    setTerms([...result.slice(0, 10)]);
  }

  useEffect(() => {
    if (!term) return;
    timing();
    !isLoading && searchAPICall();
  }, [searchApi, term, isLoading]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TermContext.Provider value={{ search, terms }}>
      {children}
    </TermContext.Provider>
  );
};
