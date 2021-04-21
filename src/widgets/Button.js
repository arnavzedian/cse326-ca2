import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  padding: 10px 30px;
  border: 2px solid #111;
  cursor: pointer;
`;

function Widget({ children }) {
  return <Button>{children}</Button>;
}

export default Widget;
