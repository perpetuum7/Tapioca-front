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
          value={asset || ""}
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

export default LoanCard;
