import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
const supportedChainTds = [4]
const connectirs = {
  injected: {}
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
