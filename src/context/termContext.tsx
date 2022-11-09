import React, { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

const TermContext = createContext(null);

export const TermProvider: React.FC<Props> = ({ children }) => {
  return <TermContext.Provider value={null}>{children}</TermContext.Provider>;
};
