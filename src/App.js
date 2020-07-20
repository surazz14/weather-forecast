import React from "react";
import { Provider } from "mobx-react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import store from "./entities/setUpStore";
import Path from "./Route/route";

function WrapThemeProvider(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{props.children}</CssBaseline>
    </ThemeProvider>
  );
}

function App() {
  return (
      <Provider {...store}>
        <WrapThemeProvider>
          <Path />
        </WrapThemeProvider>
      </Provider>
  );
}

export default App;
