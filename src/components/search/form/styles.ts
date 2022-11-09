import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 30px;
  padding-left: 70px;
  border-radius: 50px;
  font-size: 1.2rem;
`;
const Button = styled.button`
  position: absolute;
  padding: 0 40px;
  height: 100%;
  right: 0;
  border-radius: 0 50px 50px 0;
  background-color: #2962da;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const IconBox = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding-left: 30px;
`;

const S = {
  Form,
  Input,
  Button,
  IconBox,
};

export default S;
