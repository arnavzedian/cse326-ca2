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
`;

const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

function Widget() {
  let [currentTab, setTab] = useState("Home");

  return (
    <Column>
      <Header />
      <Row>
        <LeftPanel></LeftPanel> <RightPanel></RightPanel>
      </Row>
    </Column>
  );
}

export default Widget;
