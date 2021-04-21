import React, { useEffect, useState } from "react";
import styled from "styled-components";
import loading from "../assets/loading.gif";
const Tutor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 105px;
  overflow: hidden;
  margin-bottom: 25px;
`;

const Image = styled.img`
  height: 105px;
  width: 105px;
  background-color: #111;
  border-radius: 25px;
`;

const Name = styled.span`
  margin-top: 5px;
  font-size: 15px;
`;

function Widget() {
  const [image, setImage] = useState(loading);
  const [name, setName] = useState("Loading...");

  useEffect(() => {
    fetch("https://randomuser.me/api/?gender=male")
      .then((data) => data.json())
      .then((parsedData) => {
        console.log(parsedData);
        let result = parsedData.results[0];
        let name = `${result.name.title} ${result.name.first}`;
        setName(name);
        let image = result.picture.medium;
        setImage(image);
      });
  }, []);

  return (
    <Tutor>
      <Image src={image} />
      <Name>{name}</Name>
    </Tutor>
  );
}

export default Widget;
