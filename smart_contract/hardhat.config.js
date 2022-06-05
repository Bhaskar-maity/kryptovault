require("@nomiclabs/hardhat-waffle");
const hardhatConfig = require("./hardhatConfigDetails");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: hardhatConfig.rinkeby.alchemyUrl,
      accounts: hardhatConfig.rinkeby.accountsPrivateKeys,
    },
  },
};
