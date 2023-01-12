import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY="dnTGGfbz3qLGTYzv6AtGvj4OyshmpAmy";
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    }
  }
};

export default config;
