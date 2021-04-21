import React from "react";
import styled from "styled-components";
import HomeWidgets from "./HomeWidgets";
import VideoWidgets from "./VideoWidgets";
import TutorWidgets from "./TutorWidgets";
import TestYourselfWidgets from "./TestYourselfWidgets";
import ContactUsWidgets from "./ContactUsWidgets";
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

function Widget({ currentTab }) {
  let relation = {};
  relation["Home"] = <HomeWidgets></HomeWidgets>;
  relation["Videos"] = <VideoWidgets></VideoWidgets>;
  relation["Tutor"] = <TutorWidgets></TutorWidgets>;
  relation["Test Yourself"] = <TestYourselfWidgets></TestYourselfWidgets>;
  relation["Contact Us"] = <ContactUsWidgets></ContactUsWidgets>;

  console.log(currentTab, relation[currentTab]);
  return relation[currentTab];
}

export default Widget;
