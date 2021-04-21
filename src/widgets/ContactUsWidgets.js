import React from "react";
import styled from "styled-components";
import Button from "./Button";
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

const Context = styled.div`
  flex-direction: column;
  border: 2px solid #111;
  margin-bottom: 25px;
  height: 400px;
  width: 62%;
  border-radius: 0 15px 15px 15px;
`;

const Email = styled.input`
  border: none;
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  border-radius: 50px 50px 0 0;
  border-bottom: 2px solid #111;
`;

const Message = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`;

const Heading = styled.h1`
  font-family: sacramento;
  margin-top: 50px;
`;

function Widget() {
  return (
    <Main>
      <Heading>Contact Us</Heading>
      <Context>
        <Email placeholder="email"></Email>
        <Message placeholder="Message"></Message>
      </Context>
      <Button width={"62%"}>Send Message</Button>
    </Main>
  );
}

export default Widget;
