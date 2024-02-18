import styled from "styled-components";

function Easy({ children, ...props }) {
  return (
    <Wrapper className="section">
      {/* {children}
      <h2>{props.name1}</h2>
      {/* <h1>hello</h1>
      <h2>hrihtik</h2>
      <h2>harshit</h2> */}
      <button onClick={props.changeName1}>click here</button> */}
    </Wrapper>
  );
}

export function CallMe() {
  return "Hello World";
}

export default Easy;

const Wrapper = styled.section`
  height: 400 px;
  width: 400px;
  border: 1px solid black;
`;
