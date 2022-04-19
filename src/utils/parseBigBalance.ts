import { ethers } from "ethers";

const parseBigBalance = (amount: ethers.BigNumber) => {
  return ethers.utils.formatEther(amount);
};

export default parseBigBalance;
