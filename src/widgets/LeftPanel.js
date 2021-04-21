import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Main = styled.div`
  flex-direction: Column;
  display: flex;
  position: relative;
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

const Details = styled.div`
  flex-direction: row;
  display: flex;
  width: 20vw;
  box-sizing: border-box;
  position: absolute;
  bottom: 15px;
  left: 0;
`;

const SmallOption = styled.div`
  opacity: 0.5;
  width: 10vw;
  text-align: center;
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

      <Details>
        <SmallOption>Report Error</SmallOption>
        <SmallOption>Suggest Feat.</SmallOption>
      </Details>
    </Main>
  );
}

export default Widget;
