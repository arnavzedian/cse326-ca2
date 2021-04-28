import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  padding: 10px 30px;
  border: 2px solid #111;
  border-radius: 10px;
  cursor: pointer;
  width: ${({ width }) => width};
  background-color: #fff;
  color: #111;
  transition: all 0.25s ease-in-out;

  :hover {
    opacity: 1;
    /* border: 2px solid #fff; */
    filter: invert(1);
    /* background-color: ${({ active }) => (active == true ? "#fff" : "#111")};
  color: ${({ active }) => (active == true ? "#111" : "#fff")}; */
  }
`;

function Widget({ children, onClick, width }) {
  return (
    <Button width={width} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Widget;
