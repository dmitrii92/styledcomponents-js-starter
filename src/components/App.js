import React from "react";
import { ThemeProvider } from "styled-components";

import Wrapper from "./Wrapper";
import Header from "./Header";

const themeCalibri = {
  font: "Calibri",
  fontSize: "16pt"
};

const themeArial = {
  font: "Arial",
  fontSize: "30pt"
};

export default () => (
  <Wrapper>
    <ThemeProvider theme={themeCalibri}>
      <Header>Small Calibri text!</Header>
    </ThemeProvider>
    <ThemeProvider theme={themeArial}>
      <Wrapper>
        <Header>Big Arial text!</Header>
        <Header fontSize="15pt">
          Arial text with overrided property fontSize!
        </Header>
      </Wrapper>
    </ThemeProvider>
  </Wrapper>
);
