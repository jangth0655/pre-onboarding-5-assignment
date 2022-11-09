import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const Section = styled.section`
  background-color: #c6e3fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  padding-top: 50px;
  height: 100vh;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return <Section>{children}</Section>;
};

export default Layout;
