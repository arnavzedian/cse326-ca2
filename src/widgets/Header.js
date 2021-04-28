import React from "react";
import styled from "styled-components";
import home from "../assets/home.svg";
import videos from "../assets/videos.svg";
import tutor from "../assets/tutor.svg";
import testYourself from "../assets/test-yourself.svg";
import contactUs from "../assets/contact-us.svg";
import Tab from "./Tab";

const Icon = styled.img``;

const Span = styled.div``;

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
  align-items: flex-end;
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
  let allTabNames = {
    Home: home,
    Videos: videos,
    Tutor: tutor,
    "Test Yourself": testYourself,
    "Contact Us": contactUs,
  };

  for (let tab in allTabNames) {
    function setter() {
      console.log(tab);
      setTab(tab);
    }

    if (currentTab == tab) {
      tabList.push(
        <Tab key={tab} onClick={setter} active={true}>
          <Icon src={allTabNames[tab]} />
          <Span>{tab}</Span>
        </Tab>
      );
    } else {
      tabList.push(
        <Tab key={tab} onClick={setter}>
          <Icon src={allTabNames[tab]} />
          <Span>{tab}</Span>
        </Tab>
      );
    }
  }

  return <Header>{[logoWidget, <Tabs>{tabList}</Tabs>]}</Header>;
}

export default Widget;
