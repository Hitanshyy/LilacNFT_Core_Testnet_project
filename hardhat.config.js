require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: "0.8.24",
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      core_testnet: process.env.CORE_API_KEY
    },
    customChains: [
      {
        network: "core_testnet",
        chainId: 1115,
        urls: {
          apiURL: "https://scan.test.btcs.network/api",
          browserURL: "https://scan.test.btcs.network"
        }
      }
    ]
  }
};

