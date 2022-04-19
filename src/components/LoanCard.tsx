import { useState } from "react";

interface Props {
  selectedAsset?: string;
  isCollateral?: boolean;
  apy?: number;
  deposited: string;
  onDeposit: (amount: number) => void;
  onApprove: () => void;
}

const LoanCard = ({
  selectedAsset,
  isCollateral = false,
  apy = 0,
  deposited,
  onDeposit,
  onApprove,
}: Props) => {
  const [amount, setAmount] = useState<number>();

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="font-bebas-neue text-2xl">
          {isCollateral ? "Collateral" : "Asset"}:{" "}
          <span className="text-custom-pink-1">{selectedAsset}</span>
        </div>
        <div className="font-bebas-neue text-lg">APY%: {apy.toFixed(2)}</div>
      </div>
      <div className="rounded-lg border-2 border-custom-blue bg-custom-grey-4 p-4">
        <div className="flex justify-between mb-4">
          <div>Approve BeachBar</div>
          <button
            onClick={onApprove}
            className="font-bebas-neue rounded-lg	border-4 border-custom-green text-lg px-4"
          >
            Approve {selectedAsset}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg">Amount Deposited:</div>
          <div>
            {deposited} {selectedAsset}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">In Wallet:</div>
          <div>0</div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <input
            value={amount || ""}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            type="number"
            placeholder="0.0"
            className="bg-transparent border-b-2 border-custom-green p-1"
          />
          <button
            onClick={() => onDeposit(amount || 0)}
            className="font-bebas-neue rounded-lg	border-4 border-custom-green text-lg px-4"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
