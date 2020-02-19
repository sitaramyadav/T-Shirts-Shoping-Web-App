import React from "react";
import styled from "styled-components";
import { Main } from "./Main";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
`;

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default App;
