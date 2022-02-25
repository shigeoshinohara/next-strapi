import "../styles/globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

const theme = {
  colors: {
    primary: "#efefef",
  },
};

// 共通の処理を書く時にはここに書く
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
