import { useEffect, useState } from "react";
import SelectDropdown from "../SelectDropdown";
import { LOAN_LIST } from "@/utils/constants";

interface Props {
  selectedAsset?: string;
  asset?: number;
  changeAsset: (value: number) => void;
  isCollateral?: boolean;
  apy?: number;
}

const LoanCard = ({
  selectedAsset,
  asset,
  changeAsset,
  isCollateral = false,
  apy = 0,
}: Props) => (
  <div>
    <div className="flex justify-between items-center w-full">
      <div className="font-bebas-neue text-2xl">
        {isCollateral ? "Collateral" : "Asset"}:{" "}
        <span className="text-custom-pink-1">{selectedAsset}</span>
      </div>
      <div className="font-bebas-neue text-lg">APY%: {apy.toFixed(2)}</div>
    </div>
    <div className="rounded-lg border-2 border-custom-blue bg-custom-grey-4 p-4">
      <div>Approve BeachBar</div>
      <div className="my-2">Approve {selectedAsset}</div>
      <div className="flex justify-between items-center">
        <div className="text-lg">Amount:</div>
        <div>0</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm">In Wallet:</div>
        <div>0</div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <input
          value={asset}
          onChange={(e) => changeAsset(parseFloat(e.target.value))}
          type="number"
          placeholder="0.0"
          className="bg-transparent border-b-2 border-custom-green p-1"
        />
        <button className="font-bebas-neue rounded-lg	border-4 border-custom-green text-lg px-4">
          Deposit
        </button>
      </div>
    </div>
  </div>
);

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

  // 0.0771

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

export default Loan;
