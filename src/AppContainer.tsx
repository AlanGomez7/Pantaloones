import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { blue } from "@mui/material/colors";

function AppContainer() {
  const theme = createTheme({
    palette: {
      primary: blue,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {},
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default AppContainer;
