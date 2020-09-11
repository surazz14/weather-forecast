import React from "react";
import { Provider } from "mobx-react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import store from "./entities/setUpStore";
import Path from "./Route/route";
import ReactGA from 'react-ga';

function WrapThemeProvider(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{props.children}</CssBaseline>
    </ThemeProvider>
  );
}
function initializeAnalytics(){
const trackingId = "UA-177748145-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview('/')
}

function App() {
  initializeAnalytics()
  return (
      <Provider {...store}>
        <WrapThemeProvider>
          <Path />
        </WrapThemeProvider>
      </Provider>
  );
}

export default App;
