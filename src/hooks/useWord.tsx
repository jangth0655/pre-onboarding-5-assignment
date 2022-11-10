import { InputContext } from 'context/InputContext';
import { IsStoreContext } from 'context/IsStoreContext';
import { useContext } from 'react';

export const useWord = () => {
  const state = useContext(InputContext);
  if (!state) throw new Error('Context의 Input State가 존재하지 않습니다.');

  return {
    search: state.search,
    words: state.words,
    word: state.word,
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
