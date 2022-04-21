import { useContext, useEffect, useState } from "react";
import SelectDropdown from "@/components/SelectDropdown";
import LoanCard from "@/components/LoanCard";
import { LOAN_LIST } from "@/utils/constants";
import { ethers } from "ethers";
import { loadContract__TEST } from "tapioca-sdk";
import { WalletContext } from "@/wallet/WalletContext";
import parseBigBalance from "@/utils/parseBigBalance";
import { loanHooks } from "@/utils/loanHooks";
import MintToken from "@/components/loan/MintTokens";

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

  const winEthereum = (window as any).ethereum;
  const provider = new ethers.providers.Web3Provider(winEthereum);
  const signer = provider.getSigner();

  const [depositedCollateral, setDepositedCollateral] = useState("0");

  const {
    balance: wethBalance,
    isMinting: isMintingWeth,
    isLoading: isLoadingWeth,
    isApproved: isWethApproved,
    isAproving: isWethApproving,
    mint: mintWETH,
    approve: approveWeth,
    deposit: depositWeth,
  } = useWethContract(address);

  const {
    balance: usdcBalance,
    isMinting: isMintingUsdc,
    isLoading: isLoadingUsdc,
    isApproved: isUsdcApproved,
    isAproving: isUsdcApproving,
    mint: mintUSDC,
    approve: approveUsdc,
    deposit: depositUsdc,
  } = useUsdcContract(address);

  // const isAllApproved = isWethApproved && isUsdcApproved && isMixologistApproved;
  // TODO: if its not all approved dont allow deposit
  // TODO: change texts to be: Deposit/Lend

  const { assetBalance } = useBeachbarContract(address);

  const { mixologist } = loadContract__TEST(signer);

  const getDepositedCollateral = async () => {
    const balance = await mixologist.balanceOf(address);
    setDepositedCollateral(parseBigBalance(balance));
  };

  useEffect(() => {
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

  return (
    <div className="md:m-8 my-4 mx-3 flex flex-col md:flex-row justify-center">
      <div className="md:hidden flex justify-center mb-3">
        <MintToken
          mintWETH={mintWETH}
          mintUSDC={mintUSDC}
          isMintingWeth={isMintingWeth}
          isMintingUsdc={isMintingUsdc}
          isLoadingWeth={isLoadingWeth}
          isLoadingUsdc={isLoadingUsdc}
        />
      </div>

      <LoanCard
        selectedAsset={selectedAsset}
        deposited={assetBalance}
        onDeposit={depositWeth}
        onApprove={approveWeth}
        assetBalance={wethBalance}
        isApproved={isWethApproved}
        isApproving={isWethApproving}
      >
        <div className="order-0 h-20 pt-2">
          <SelectDropdown
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
        onDeposit={depositUsdc}
        onApprove={approveUsdc}
        assetBalance={usdcBalance}
        isApproved={isUsdcApproved}
        isApproving={isUsdcApproving}
      >
        <div className="order-0 hidden md:inline">
          <MintToken
            mintWETH={mintWETH}
            mintUSDC={mintUSDC}
            isMintingWeth={isMintingWeth}
            isMintingUsdc={isMintingUsdc}
            isLoadingWeth={isLoadingWeth}
            isLoadingUsdc={isLoadingUsdc}
          />
        </div>

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
