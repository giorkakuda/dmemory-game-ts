require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    bsctest: {
      provider: new HDWalletProvider({
        mnemonic: {
        phrase: process.env.SECRET
      },
      providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/"
    }),
    network_id: "97"
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",
       settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }, 
       }
    }
  },
};