require("@nomicfoundation/hardhat-toolbox");

const dotenv = require('dotenv')


dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli:{
      url: process.env.REACT_APP_REAC_APP_ALCHEMY_URL,
      accounts: [process.env.REAC_APP_PRIVATE_KEY]
    },
  },
  etherscan:{
    apiKey: process.env.REAC_APP_ALCHEMY_API_KEY,
  }
};
