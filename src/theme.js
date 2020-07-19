import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f2f2f2",
    },
  },
});

export default responsiveFontSizes(theme);
