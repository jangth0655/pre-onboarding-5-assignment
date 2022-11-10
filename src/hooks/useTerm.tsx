import { InputContext } from 'context/InputContext';
import { IsStoreContext } from 'context/IsStoreContext';
import { useContext } from 'react';

export const useTerm = () => {
  const state = useContext(InputContext);
  if (!state) throw new Error('Context의 Input State가 존재하지 않습니다.');

  return {
    search: state.search,
    terms: state.terms,
    term: state.term,
  };
};

export const useStore = () => {
  const state = useContext(IsStoreContext);
  if (!state) throw new Error('Context의 IsStore State가 존재하지 않습니다.');
  return {
    isStore: state.checkingStore,
    stored: state.isStore,
  };
};
