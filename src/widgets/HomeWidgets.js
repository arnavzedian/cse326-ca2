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
  display: flex;
  gap: 65px;
`;

const Heading = styled.h1`
  font-family: sacramento;
  margin-top: 50px;
`;

const Details = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 50px;
  gap: 25px;
  box-sizing: border-box;
`;

const SmallOption = styled.div`
  opacity: 0.5;

  text-align: center;
`;

const Details2 = styled.div`
  flex-direction: column;
  display: flex;
  /* gap: 25px; */
  box-sizing: border-box;
  opacity: 0.5;
  width: 100px;
  position: absolute;
  border: 2px solid #111;
  border-radius: 15px;
  right: 50px;
  bottom: 15px;
`;

const SmallOption2 = styled.div`
  border-bottom: 2px solid #111;
  text-align: center;
  padding: 10px 0;
`;

const SmallOption3 = styled.div`
  text-align: center;
  padding: 10px 0;
`;
function Widget({ text }) {
  return (
    <Main>
      <Heading>Introduction</Heading>
      <Context>
        Sunt aute id excepteur cillum adipisicing excepteur laborum aute eu
        minim nulla eu deserunt. Tempor tempor consequat amet ea consequat Lorem
        officia Lorem officia pariatur. Consectetur anim occaecat tempor
        cupidatat excepteur mollit ad consequat commodo. Voluptate id
        exercitation duis quis duis esse non labore aute occaecat ad velit
        voluptate ea. Sunt nostrud culpa nostrud occaecat qui. Ullamco laborum
        incididunt culpa nisi aliquip. Ad nulla sit ea eu in ad ea incididunt
        laboris pariatur id ad. Elit aliqua magna adipisicing aliqua sunt
        ullamco consequat fugiat esse voluptate ut magna quis. Mollit culpa
        fugiat reprehenderit id quis ullamco est sunt sit. Anim pariatur ut
        laborum Lorem ullamco. Cillum ullamco ut duis Lorem. Veniam dolor aliqua
        officia enim cupidatat sunt tempor irure ullamco est non ex velit.
      </Context>
      <Heading>Content</Heading>
      <Context>
        Sunt aute id excepteur cillum adipisicing excepteur laborum aute eu
        minim nulla eu deserunt. Tempor tempor consequat amet ea consequat Lorem
        officia Lorem officia pariatur. Consectetur anim occaecat tempor ullamco
        consequat fugiat esse voluptate ut magna quis. Mollit culpa fugiat
        reprehenderit id quis ullamco est sunt sit. Anim pariatur ut laborum
        Lorem ullamco. Cillum ullamco ut duis Lorem. Veniam dolor aliqua officia
        enim cupidatat sunt tempor irure ullamco est non ex velit.
      </Context>

      <Details>
        <SmallOption>{"< previous page"}</SmallOption>
        <SmallOption>{" next page >"}</SmallOption>
      </Details>

      <Details>
        <SmallOption>FAQ</SmallOption>
        <SmallOption>Copyright © 2021, All rights reserved.</SmallOption>
      </Details>

      <Details2>
        <SmallOption2>Feedback</SmallOption2>
        <SmallOption3>About</SmallOption3>
      </Details2>
    </Main>
  );
}

export default Widget;
