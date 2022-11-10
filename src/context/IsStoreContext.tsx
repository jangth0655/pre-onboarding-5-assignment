import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type Checked = {
  checkingStore: () => void;
  isStore: boolean;
};

export const IsStoreContext = createContext<Checked | null>(null);

export const CheckStoreProvider: React.FC<Props> = ({ children }) => {
  const [isStore, setIsStore] = useState(false);

  const checkingStore = () => {
    setIsStore(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IsStoreContext.Provider value={{ isStore, checkingStore }}>
      {children}
    </IsStoreContext.Provider>
  );
};
