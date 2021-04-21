import React from "react";
import styled from "styled-components";
import Tutor from "./Tutor";
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

const TutorList = styled.div`
  flex-direction: row;
  display: flex;
  gap: 65px;
`;

const Heading = styled.h1`
  font-family: sacramento;
  margin-top: 50px;
`;

function Widget({ text }) {
  return (
    <Main>
      <Heading>Tutors</Heading>
      <TutorList>
        <Tutor></Tutor> <Tutor></Tutor> <Tutor></Tutor> <Tutor></Tutor>
      </TutorList>
      <TutorList>
        <Tutor></Tutor> <Tutor></Tutor> <Tutor></Tutor> <Tutor></Tutor>
      </TutorList>
      <TutorList>
        <Tutor></Tutor> <Tutor></Tutor> <Tutor></Tutor> <Tutor></Tutor>
      </TutorList>
    </Main>
  );
}

export default Widget;
