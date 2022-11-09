import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 20px 30px;
`;

const SuggestedTermContainer = styled.div`
  margin-bottom: 1rem;
`;
const SuggestedTerm = styled.h1`
  color: #a2a5aa;
  font-weight: bold;
`;

const S = {
  SuggestedTermContainer,
  SuggestedTerm,
  Container,
};

export default S;
