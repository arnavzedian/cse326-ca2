import React, { useEffect } from "react";
import styled from "styled-components";
import loading from "../assets/loading.gif";
const Tutor = styled.div``;

const Iframe = styled.iframe`
  border: none;
`;

// const Name = styled.span``;

function Widget() {
  return (
    <Iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
    ></Iframe>
  );
}

export default Widget;
