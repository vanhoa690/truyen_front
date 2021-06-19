import "../styles/globals.css"
import type { AppProps } from "next/app"
import { PageStore } from '../contexts/Page';
// import { Provider } from "react-redux"
// import store from "../store"
import "@fortawesome/fontawesome-free/css/all.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    // <Provider store={store}>
    <PageStore>
      <Component {...pageProps} />
    </PageStore>
    // </Provider>
  )
}
export default MyApp
