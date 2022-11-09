import styled from 'styled-components';

const TermContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;

  margin-bottom: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const Term = styled.h1`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const S = {
  TermContainer,
  IconBox,
  Term,
};

export default S;
