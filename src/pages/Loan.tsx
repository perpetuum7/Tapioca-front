import { useContext, useEffect, useState } from "react";
import SelectDropdown from "@/components/SelectDropdown";
import LoanCard from "@/components/LoanCard";
import { LOAN_LIST } from "@/utils/constants";
import { ethers } from "ethers";
import { loadContract__TEST } from "tapioca-sdk";
import { WalletContext } from "@/wallet/WalletContext";
import parseBigBalance from "@/utils/parseBigBalance";

interface Props {
  address: string;
}

const Loan = ({ address }: Props) => {
  const winEthereum = (window as any).ethereum;
  const provider = new ethers.providers.Web3Provider(winEthereum);

  const [depositedAsset, setDepositedAsset] = useState("0");
  const [depositedCollateral, setDepositedCollateral] = useState("0");

  const [wethBalance, setWethBalance] = useState("0");
  const [usdcBalance, setUSDCBalance] = useState("0");

  const { mixologist, beachbar, usdc, weth } = loadContract__TEST(provider);

  const approveWeth = async () => {
    // await beachbar.setApprovalForAll(address, true);
  };
  const approveUsdc = () => {};

  const depositWeth = async (amount: number) => {
    // await beachbar.deposit()
    // await mixologist.addAsset()
  };

  const depositUsdc = (amount: number) => {
    // await beachbar.deposit()
    // await mixologist.addCollateral()
    // await mixologist.borrow()
    // if got tokens:
    // await beachbar.withdraw()
  };

  const getListOfAssets = async () => {
    // const assets = await beachbar.assets(0);
    // const assets = await beachbar.assets(1);
    // const assets = await beachbar.assets(2);
    // const assets = await beachbar.assets(3);
  };

  const getWETHBalance = async () => {
    const balance = await weth.balanceOf(address);
    setWethBalance(parseBigBalance(balance));
  };

  const getUSDCBalance = async () => {
    const balance = await usdc.balanceOf(address);
    setUSDCBalance(parseBigBalance(balance));
  };

  const getDepositedAsset = async () => {
    const balance = await beachbar.balanceOf(address, 0);
    setDepositedAsset(parseBigBalance(balance));
  };

  const getDepositedCollateral = async () => {
    const balance = await mixologist.balanceOf(address);
    setDepositedCollateral(parseBigBalance(balance));
  };

  useEffect(() => {
    getWETHBalance();
    getUSDCBalance();

    getDepositedAsset();
    getDepositedCollateral();
  }, []);

  const tradingPars = LOAN_LIST.reduce((acc: string[], value) => {
    const { token, prices } = value;
    Object.keys(prices).forEach((loan) => {
      if (loan !== token) acc.push(`${token}/${loan}`);
    });

    return acc;
  }, []);

  const [selectedMarket, setSelectedMarket] = useState<string>(tradingPars[0]);

  const selectedAsset = selectedMarket?.split("/")[0];
  const selecteCollateral = selectedMarket?.split("/")[1];

  const colleteralValues = LOAN_LIST.find(
    (loan) => loan.token === selectedAsset
  );

  return (
    <div className="md:m-8 my-4 mx-3 flex flex-col md:flex-row justify-center">
      <div className="md:basis-1/2 mx-4">
        <div className="h-14">
          <SelectDropdown
            label="Market selector"
            selectedOption={selectedMarket}
            options={tradingPars}
            selectOption={(op: string) => setSelectedMarket(op)}
          />
        </div>
        <LoanCard
          selectedAsset={selectedAsset}
          deposited={depositedAsset}
          onDeposit={depositWeth}
          onApprove={approveWeth}
          assetBalance={wethBalance}
        />
        <div className="mt-8 pl-2">
          <div>Asset available: 0</div>
          <div>Asset borrowed: 0</div>
        </div>
      </div>
      <div className="md:basis-1/2 mx-4">
        <div className="h-6 md:h-14" />
        <LoanCard
          selectedAsset={selecteCollateral}
          isCollateral
          deposited={depositedCollateral}
          onDeposit={depositUsdc}
          onApprove={approveUsdc}
          assetBalance={usdcBalance}
        />

        <div className="mt-8 pl-2">
          <div>Total collateral: 0</div>
          <div>Borrowed: 0</div>
          <div>Health: 0</div>
        </div>
      </div>
    </div>
  );
};

const LoadLoan = () => {
  const { isConnected, isConnecting, metamaskNotAvailable, wallet } =
    useContext(WalletContext);

  if (metamaskNotAvailable) {
    return <div className="text-center mt-10">Metamask not installed.</div>;
  }

  if (isConnecting) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!isConnected || !wallet.address) {
    return <div className="text-center mt-10">Connect your wallet</div>;
  }

  return <Loan address={wallet.address} />;
};

export default LoadLoan;