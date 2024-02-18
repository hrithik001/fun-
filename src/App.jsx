import "./App.css";
import VideoCard from "./components/VideoCard";
import data from "./containsData/data.json";
import styled from "styled-components";
import Easy from "./components/Easy";
import { CallMe } from "./components/Easy";
import { useEffect, useState } from "react";
function App() {
  // const name = "hrithik";
  const diffName = "harshit";

  const [name, setName] = useState("hrihtik");

  function changeName() {
    setName("harshit");
  }
  return (
    <Wrapper className="section">
      {Object.values(data).map((videoData, index) => (
        <VideoCard videoData={videoData} key={index} />
      ))}
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.section`
  padding-top: 20px;
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  gap: 20px;
`;
