import ETH from "./ETH";
import ETHGrey from "./ETH-grey";

import FRAX from "./FRAX";
import FRAXGrey from "./FRAX-grey";

import USDT from "./USDT";
import USDTGrey from "./USDT-grey";

import BOBA from "./BOBA";
import BOBAGrey from "./BOBA-grey";

import USDC from "./USDC";
import USDCGrey from "./USDC-grey";

import DAI from "./DAI";
import DAIGrey from "./DAI-grey";

interface Props {
  token: string;
  isSelected?: boolean;
  width?: string;
  height?: string;
}

const GetToken = ({ token, isSelected = false, width, height }: Props) => {
  switch (token) {
    case "ETH":
      return isSelected ? (
        <ETH width={width} height={height} />
      ) : (
        <ETHGrey width={width} height={height} />
      );

    case "FRAX":
      return isSelected ? (
        <FRAX width={width} height={height} />
      ) : (
        <FRAXGrey width={width} height={height} />
      );

    case "USDT":
      return isSelected ? (
        <USDT width={width} height={height} />
      ) : (
        <USDTGrey width={width} height={height} />
      );

    case "BOBA":
      return isSelected ? (
        <BOBA width={width} height={height} />
      ) : (
        <BOBAGrey width={width} height={height} />
      );

    case "USDC":
      return isSelected ? (
        <USDC width={width} height={height} />
      ) : (
        <USDCGrey width={width} height={height} />
      );

    case "DAI":
      return isSelected ? (
        <DAI width={width} height={height} />
      ) : (
        <DAIGrey width={width} height={height} />
      );

    default:
      return <div></div>;
  }
};

export default GetToken;
