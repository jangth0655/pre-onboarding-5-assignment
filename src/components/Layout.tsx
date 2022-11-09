import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Section = styled.section`
  padding: 10px 15px;
  padding-top: 40px;
  background-color: #c6e3fd;
  min-height: 100vh;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return <Section>{children}</Section>;
};
export default Layout;
