import LoanCard from "@/components/LoanCard";
import { loanHooks } from "@/utils/loanHooks";

interface Props {
  address: string;
  main: string;
  collateral: string;
}

const Loan = ({ address, main, collateral }: Props) => {
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

  return (
    <div className="md:m-8 my-4 mx-3 flex flex-col md:flex-row justify-center">
      <LoanCard
        selectedAsset={main}
        deposited={assetBalance}
        onDeposit={deposit}
        onApprove={approveWeth}
        assetBalance={wethBalance}
        isApproved={isWethApproved}
        isApproving={isWethApproving}
        isDepositDisabled={!isUsdcApproved || !isWethApproved}
      ></LoanCard>

      <LoanCard
        selectedAsset={collateral}
        isCollateral
        deposited={depositedCollateral}
        onDeposit={lendAsset}
        onApprove={approveUsdc}
        assetBalance={usdcBalance}
        isApproved={isUsdcApproved}
        isApproving={isUsdcApproving}
        isDepositDisabled={!isUsdcApproved || !isWethApproved}
      ></LoanCard>
    </div>
  );
};

export default Loan;
