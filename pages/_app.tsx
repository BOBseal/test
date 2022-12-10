import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
//import type  {AppProps}  from 'next/app'

export const ACi = ChainId.Mumbai

 function App({ Component, pageProps }) {
  return ( <ThirdwebProvider desiredChainId={ChainId.ACi}
  chainRpc={{[ChainId.ACi]: process.env.RPC_URL}}
  >
    <Component {...pageProps} />
  </ThirdwebProvider>)
}

export default App