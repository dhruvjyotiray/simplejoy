import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #871b77;
  color: white;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #02060b;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
