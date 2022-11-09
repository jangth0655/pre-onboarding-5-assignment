import { TermContext } from 'context/termContext';
import { useContext } from 'react';

export const useTerm = () => {
  const state = useContext(TermContext);
  if (!state) throw new Error('Context의 State가 존재하지 않습니다.');

  return {
    search: state.search,
    terms: state.terms,
  };
};
