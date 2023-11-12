import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    //for ottochain testnet
    'ottochain-testnet': {
      url: 'https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz',
      accounts: [process.env.WALLET_KEY as string]
    },
    //for ottochain mainnet
    'ottochain-mainnet': {
      url: 'https://gateway.mainnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz',
      accounts: [process.env.WALLET_KEY as string]
    },
  },
  defaultNetwork: 'hardhat',
  // etherscan: {
  //   apiKey: {
  //    "base-goerli": "PLACEHOLDER_STRING"
  //   },
  //   customChains: [
  //     {
  //       network: "base-goerli",
  //       chainId: 84531,
  //       urls: {
  //        apiURL: "https://api-goerli.basescan.org/api",
  //        browserURL: "https://goerli.basescan.org"
  //       }
  //     }
  //   ]
  // },
};

export default config;