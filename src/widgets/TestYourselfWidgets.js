import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Option from "./Option";
const Main = styled.div`
  flex-direction: Column;
  display: flex;
  height: 85vh;
  overflow-y: scroll;
  padding: 2vw 5vw;
  border-right: 2px solid #000;
  box-sizing: border-box;
  width: 80vw;
`;

const Question = styled.h3`
  flex-direction: column;
  display: flex;
  gap: 65px;
`;

const Options = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 50px;
  gap: 25px;
`;

const Heading = styled.h1`
  font-family: sacramento;
  margin-top: 50px;
`;

function Widget({ text }) {
  return (
    <Main>
      <Heading>Test Yourself</Heading>

      <Question>
        Sunt aute id excepteur cillum adipisicing excepteur laborum aute eu
        minim nulla eu deserunt. Tempor tempor consequat amet consequat
        consequat?
      </Question>

      <Options>
        <Option>Tempor</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
      </Options>

      <Question>
        Sunt aute id excepteur cillum adipisicing excepteur laborum aute eu
        minim nulla eu deserunt. Tempor tempor consequat amet consequat
        consequat?
      </Question>

      <Options>
        <Option>Tempor</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
      </Options>

      <Question>
        Sunt aute id excepteur cillum adipisicing excepteur laborum aute eu
        minim nulla eu deserunt. Tempor tempor consequat amet consequat
        consequat?
      </Question>

      <Options>
        <Option>Tempor</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
      </Options>

      <Question>
        Sunt aute id excepteur cillum adipisicing excepteur laborum aute eu
        minim nulla eu deserunt. Tempor tempor consequat amet consequat
        consequat?
      </Question>

      <Options>
        <Option>Tempor</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
        <Option>consequat</Option>
      </Options>

      <Button width="62%">Submit</Button>
    </Main>
  );
}

export default Widget;
