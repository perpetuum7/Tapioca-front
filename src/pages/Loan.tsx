import { useContext, useEffect, useState } from "react";
import SelectDropdown from "@/components/SelectDropdown";
import LoanCard from "@/components/LoanCard";
import { LOAN_LIST } from "@/utils/constants";
import { WalletContext } from "@/wallet/WalletContext";

const Loan = () => {
  const [asset, setAsset] = useState<number>();
  const [collateral, setCollateral] = useState<number>();

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

  const changeAssetValue = (value: number) => {
    setAsset(value);
    const colleteralAmount = colleteralValues?.prices[selecteCollateral];
    if (colleteralAmount) setCollateral(value * colleteralAmount);
  };

  const changeCollateralValue = (value: number) => {
    setCollateral(value);
    const colleteralAmount = colleteralValues?.prices[selecteCollateral];
    if (colleteralAmount) setAsset(value / colleteralAmount);
  };

  useEffect(() => {
    const colleteralAmount = colleteralValues?.prices[selecteCollateral];
    if (colleteralAmount) setCollateral((asset || 0) * colleteralAmount);
  }, [selectedMarket]);

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
          asset={asset}
          changeAsset={(asset: number) => changeAssetValue(asset)}
          selectedAsset={selectedAsset}
          apy={colleteralValues?.apy}
        />

        <div className="mt-8 pl-2">
          <div>Asset available: 0</div>
          <div>Asset borrowed: 0</div>
        </div>
      </div>

      <div className="md:basis-1/2 mx-4">
        <div className="h-6 md:h-14" />
        <LoanCard
          asset={collateral}
          changeAsset={(asset: number) => changeCollateralValue(asset)}
          selectedAsset={selecteCollateral}
          isCollateral
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
  const { isConnected, isConnecting, metamaskNotAvailable } =
    useContext(WalletContext);

  if (metamaskNotAvailable) {
    return <div className="text-center mt-10">Metamask not installed.</div>;
  }

  if (isConnecting) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!isConnected) {
    return <div className="text-center mt-10">Connect your wallet</div>;
  }

  return <Loan />;
};

export default LoadLoan;
