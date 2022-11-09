import styled from 'styled-components';

const BoardContainer = styled.ul`
  width: 100%;
  height: 600px;
  background-color: white;
  border-radius: 10px;
  padding: 40px 20px;
`;
const SuggestedTermContainer = styled.div`
  margin-bottom: 1rem;
`;
const SuggestedTerm = styled.h1`
  color: #a2a5aa;
  font-weight: bold;
`;

const S = {
  BoardContainer,
  SuggestedTermContainer,
  SuggestedTerm,
};

export default S;
