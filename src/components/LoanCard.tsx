import { useState } from "react";
import Button from "@/components/Button";

interface Props {
  selectedAsset?: string;
  isCollateral?: boolean;
  deposited: string;
  onDeposit: ({ amount }: { amount: number }) => void;
  onApprove: () => void;
  assetBalance?: string;
  children?: React.ReactNode;
}

const LoanCard = ({
  selectedAsset,
  isCollateral = false,
  deposited,
  onDeposit,
  onApprove,
  assetBalance,
  children,
}: Props) => {
  const [amount, setAmount] = useState<number>();

  return (
    <div className="flex flex-col md:basis-1/2 mx-4">
      {children}

      <div className="flex justify-between items-center w-full">
        <div className="font-bebas-neue text-2xl">
          {isCollateral ? "Collateral" : "Asset"}:{" "}
          <span className="text-custom-pink-1">{selectedAsset}</span>
        </div>
        {assetBalance && (
          <div className="font-bebas-neue text-lg">
            Wallet Balance:
            <span className="text-2xl text-custom-purple ml-1">
              {assetBalance}
            </span>
          </div>
        )}
      </div>
      <div className="rounded-lg border-2 border-custom-blue bg-custom-grey-4 p-4">
        <div className="flex justify-between mb-4">
          <div>Approve BeachBar</div>
          <Button onClick={onApprove}>Approve {selectedAsset}</Button>
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
          <Button
            onClick={() => onDeposit({ amount: amount || 0 })}
            buttonColor="blue"
          >
            Deposit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
