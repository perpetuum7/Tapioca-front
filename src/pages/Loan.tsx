import { useContext, useState } from "react";
import SelectDropdown from "@/components/SelectDropdown";
import LoanCard from "@/components/LoanCard";
import { LOAN_LIST } from "@/utils/constants";
import { WalletContext } from "@/providers/WalletContext";
import { loanHooks } from "@/utils/loanHooks";

interface Props {
  address: string;
}

const Loan = ({ address }: Props) => {
  const {
    useWethContract,
    useUsdcContract,
    useBeachbarContract,
    useMixologistContract,
  } = loanHooks();

  const {
    balance: wethBalance,
    isMinting: isMintingWeth,
    isLoading: isLoadingWeth,
    isApproved: isWethApproved,
    isAproving: isWethApproving,
    mint: mintWETH,
    approve: approveWeth,
  } = useWethContract(address);

  const {
    balance: usdcBalance,
    isMinting: isMintingUsdc,
    isLoading: isLoadingUsdc,
    isApproved: isUsdcApproved,
    isAproving: isUsdcApproving,
    mint: mintUSDC,
    approve: approveUsdc,
  } = useUsdcContract(address);

  const { assetBalance, deposit } = useBeachbarContract(address);
  const { depositedCollateral, lendAsset } = useMixologistContract(address);

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

  return (
    <div className="md:m-8 my-4 mx-3 flex flex-col md:flex-row justify-center">
      <LoanCard
        selectedAsset={selectedAsset}
        deposited={assetBalance}
        onDeposit={deposit}
        onApprove={approveWeth}
        assetBalance={wethBalance}
        isApproved={isWethApproved}
        isApproving={isWethApproving}
        isDepositDisabled={!isUsdcApproved || !isWethApproved}
      >
        <div className="order-0 h-14 pt-2">
          <SelectDropdown
            flexWidth
            label="Market selector"
            selectedOption={selectedMarket}
            options={tradingPars}
            selectOption={(op: string) => setSelectedMarket(op)}
          />
        </div>

        <div className="order-3 mt-8 pl-2">
          <div>Asset available: 0</div>
          <div>Asset borrowed: 0</div>
        </div>
      </LoanCard>

      <LoanCard
        selectedAsset={selecteCollateral}
        isCollateral
        deposited={depositedCollateral}
        onDeposit={lendAsset}
        onApprove={approveUsdc}
        assetBalance={usdcBalance}
        isApproved={isUsdcApproved}
        isApproving={isUsdcApproving}
        isDepositDisabled={!isUsdcApproved || !isWethApproved}
      >
        <div className="order-0 hidden md:inline md:h-14"></div>

        <div className="mt-8 pl-2 order-3">
          <div>Total collateral: 0</div>
          <div>Borrowed: 0</div>
          <div>Health: 0</div>
        </div>
      </LoanCard>
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
