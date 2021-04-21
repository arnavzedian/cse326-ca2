import React, { useState } from "react";
import styled from "styled-components";
import screenShot from "../assets/screenshot1.png";
import android from "../assets/android.svg";
import Header from "../widgets/Header";
import LeftPanel from "../widgets/LeftPanel";
import RightPanel from "../widgets/RightPanel";
const Column = styled.div`
  flex-direction: column;
  display: flex;
  width: 100vw;
`;

const Row = styled.div`
  flex-direction: row;
  display: flex;
  width: 100vw;
`;

function Widget() {
  const [currentTab, setTab] = useState("Home");

  return (
    <Column>
      <Header currentTab={currentTab} setTab={setTab} />
      <Row>
        <LeftPanel></LeftPanel>{" "}
        <RightPanel currentTab={currentTab} setTab={setTab}></RightPanel>
      </Row>
    </Column>
  );
}

export default Widget;
