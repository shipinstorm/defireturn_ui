import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
const INFURA_ID = "4bb16f18a63b40a4a0b155f6a0e41af1"

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Defireturn",
      infuraId: INFURA_ID 
    }
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: INFURA_ID 
    }
  }
};
