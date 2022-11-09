import styled from 'styled-components';

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const BoardContainer = styled.div`
  min-height: 100vh;
  border: 1px solid black;
  z-index: -1;
`;

const S = {
  FormContainer,
  BoardContainer,
};

export default S;
