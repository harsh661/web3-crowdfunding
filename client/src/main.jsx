import "./styles/globals.css"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import {Sepolia} from "@thirdweb-dev/chains"
import { ContractContextProvider } from "./context"
import { Toaster } from "react-hot-toast"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Sepolia} activeChain={Sepolia} clientId={process.env.CLIENT_ID}>
      <ContractContextProvider>
          <App />
          <Toaster />
      </ContractContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
)
