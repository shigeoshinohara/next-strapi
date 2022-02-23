import '../styles/globals.css'
import Header from "../components/Header";

// 共通の処理を書く時にはここに書く
function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header/>
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
