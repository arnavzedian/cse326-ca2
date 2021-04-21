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

function Widget({ currentTab, setTab }) {
  let logoWidget = (
    <Logo>
      <span>Sikho</span>
    </Logo>
  );

  let tabList = [];
  let allTabNames = ["Home", "Videos", "Tutor", "Test Yourself", "Contact Us"];

  for (let tab of allTabNames) {
    function setter() {
      console.log(tab);
      setTab(tab);
    }

    if (currentTab == tab) {
      tabList.push(
        <Tab key={tab} onClick={setter} active={true}>
          {tab}
        </Tab>
      );
    } else {
      tabList.push(
        <Tab key={tab} onClick={setter}>
          {tab}
        </Tab>
      );
    }
  }

  return <Header>{[logoWidget, <Tabs>{tabList}</Tabs>]}</Header>;
}

export default Widget;
