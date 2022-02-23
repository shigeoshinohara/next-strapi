import '../styles/globals.css'

// 共通の処理を書く時にはここに書く
function MyApp({ Component, pageProps }) {
  return (
      <>
        <p>I&apos;m a Header!!!</p>
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
