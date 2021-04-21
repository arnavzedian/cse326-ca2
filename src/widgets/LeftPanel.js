import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Main = styled.div`
  flex-direction: Column;
  display: flex;
  height: 85vh;
  padding: 2vw 5vw;
  border-right: 2px solid #000;
  width: 20vw;
  box-sizing: border-box;
`;

const Tabs = styled.div`
  flex-direction: column;
  display: flex;
  gap: 25px;
`;

const Heading = styled.h3`
  font-family: sacramento;
`;

function Widget({ text }) {
  return (
    <Main>
      <Heading>Subjects</Heading>
      <Tabs>
        <Button active={true}>Science</Button>
        <Button>Social Science</Button>
        <Button>Mathematics</Button>
        <Button>Geography</Button>
        <Button>Arts</Button>
      </Tabs>
    </Main>
  );
}

export default Widget;
