import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  padding: 15px 30px;
  border: 2px solid #111;
  cursor: pointer;
  background: #fff;
  border-bottom: none;
  margin-bottom: -2px;
  ${({ active }) => {
    if (!active)
      return `
    opacity:0.5; 
    margin-bottom:0;
    `;
  }}

  transition: all 0.25s ease-in-out;

  :hover {
    opacity: 1;
    background-color: ${({ active }) => (active == true ? "#fff" : "#111")};
    color: ${({ active }) => (active == true ? "#111" : "#fff")};
  }
`;

function Widget({ active, children, onClick }) {
  return (
    <Button onClick={onClick} active={active}>
      {children}
    </Button>
  );
}

export default Widget;
