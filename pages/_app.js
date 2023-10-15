import "@/styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const App = ({ Component, pageProps }) => (
  <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
    <Component {...pageProps} />
  </ThirdwebProvider>
);

export default App;
