import styled from 'styled-components';

const TermContainer = styled.div<{ active?: boolean }>`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  background-color: ${(props) => (props.active ? 'rgb(243 244 246)' : '')};
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
  padding: 0.5rem 0;
  font-size: 1rem;
`;

const S = {
  TermContainer,
  IconBox,
  Term,
};

export default S;
