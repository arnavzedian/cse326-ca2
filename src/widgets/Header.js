import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
const Header = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #000;
  box-sizing: border-box;
  height: 15vh;
  width: 100vw;
`;

const Tabs = styled.div`
  flex-direction: row;
  display: flex;
  margin-right: 65px;
  gap: 65px;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  font-family: sacramento;
  flex-direction: column;
  font-size: 45px;
  justify-content: center;
  padding: 0 5vw;
`;

function Widget() {
  let logoWidget = (
    <Logo>
      <span>Sikho</span>
    </Logo>
  );

  let allTabs = (
    <Tabs>
      <Tab active={true}>Home</Tab>
      <Tab>Videos</Tab>
      <Tab>Tutor</Tab>
      <Tab>Test Yourself</Tab>
      <Tab>Contact Us</Tab>
    </Tabs>
  );

  return <Header>{[logoWidget, allTabs]}</Header>;
}

export default Widget;
