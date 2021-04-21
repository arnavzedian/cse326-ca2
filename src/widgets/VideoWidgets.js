import React from "react";
import styled from "styled-components";
import Video from "./Video";
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

const VideoList = styled.div`
  flex-direction: row;
  gap: 2px;
  margin-bottom: 2px;
  display: flex;
`;

const Heading = styled.h1`
  font-family: sacramento;
  margin-top: 50px;
`;

function Widget() {
  return (
    <Main>
      <Heading>Videos</Heading>
      <VideoList>
        <Video></Video> <Video></Video> <Video></Video>
      </VideoList>
      <VideoList>
        <Video></Video> <Video></Video> <Video></Video>
      </VideoList>
      <VideoList>
        <Video></Video> <Video></Video> <Video></Video>
      </VideoList>
    </Main>
  );
}

export default Widget;
