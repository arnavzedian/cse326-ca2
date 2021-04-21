import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  padding: 10px 30px;
  border: 2px solid #111;
  cursor: pointer;
  width: ${({ width }) => width};
`;

function Widget({ children, onClick, width }) {
  return (
    <Button width={width} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Widget;
