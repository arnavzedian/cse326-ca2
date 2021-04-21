import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid #111;
  margin-right: 2px;
`;

const Main = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const Span = styled.div``;

function Widget({ children }) {
  return (
    <Main>
      <Box />
      <Span>{children}</Span>
    </Main>
  );
}

export default Widget;
