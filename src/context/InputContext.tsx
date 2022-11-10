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
  words: Sick[];
  word: string;
};

export const InputContext = createContext<Term | null>(null);

const client = new Client();
const searchApi = new SearchApi(client);

const recentlyWords = localData.previewData();
export const InputProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState('');
  const [words, setWords] = useState<Sick[]>([]);

  function search(term: string) {
    setWord(term);
  }

  const storedWord = recentlyWords.includes(word);

  useEffect(() => {
    if (!word) return;
    timing();
    if (!isLoading && !storedWord) {
      console.info('call api');
      searchAPICall(word);
      setIsLoading(true);
    }
  }, [searchApi, word, isLoading]);

  function timing() {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }

  async function searchAPICall(term: string) {
    const result = await searchApi.sickSearch(term);
    setWords([...result.slice(0, 10)]);
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <InputContext.Provider value={{ search, words, word }}>
      {children}
    </InputContext.Provider>
  );
};
