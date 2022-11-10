import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Section = styled.section`
  max-width: 1024px;
  margin: auto;
  padding: 10px 15px;
  padding-top: 40px;
  min-height: 100vh;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return <Section>{children}</Section>;
};
export default Layout;
