import styled from "styled-components";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  width: 500px;

  p {
    text-align: center;
  }

  button {
    border-radius: 12px;
    padding: 4px 8px;
    cursor: pointer;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
