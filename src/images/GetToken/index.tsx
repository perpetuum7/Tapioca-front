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
  className?: string;
}

const GetToken = ({
  token,
  isSelected = false,
  className,
}: Props) => {
  switch (token) {
    case "ETH":
      return isSelected ? (
        <ETH className={className} />
      ) : (
        <ETHGrey className={className} />
      );

    case "FRAX":
      return isSelected ? (
        <FRAX className={className} />
      ) : (
        <FRAXGrey className={className} />
      );

    case "USDT":
      return isSelected ? (
        <USDT className={className} />
      ) : (
        <USDTGrey className={className} />
      );

    case "BOBA":
      return isSelected ? (
        <BOBA className={className} />
      ) : (
        <BOBAGrey className={className} />
      );

    case "USDC":
      return isSelected ? (
        <USDC className={className} />
      ) : (
        <USDCGrey className={className} />
      );

    case "DAI":
      return isSelected ? (
        <DAI className={className} />
      ) : (
        <DAIGrey className={className} />
      );

    default:
      return <div></div>;
  }
};

export default GetToken;
