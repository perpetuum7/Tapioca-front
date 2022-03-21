import SelectDropdown from "@/components/SelectDropdown";

interface OutputEstimateProps {
  id: string;
  [token: string]: number | string;
}

interface Props {
  currentSelection: string;
  outputs?: string[];
  selectedOption?: string;
  selectOption: (op: string) => void;
  amount: null | number;
  selectAmount: (amount: number) => void;
  currentOutput: {
    id: string;
    [token: string]: number | string;
  };
}

const Output = ({
  currentSelection,
  outputs,
  selectedOption,
  selectOption,
  amount,
  selectAmount,
  currentOutput,
}: Props) => {
  const selectedOutput = Object.keys(currentOutput)
    .filter((id) => id !== "id")
    .map((id) => {
      const total = currentOutput[id] as number;
      return { id, total: total * (amount || 0) };
    });

  switch (currentSelection) {
    case "furucombo:unstake_token":
      return (
        <div className="px-3">
          <div className="text-custom-grey-1">Output</div>
          <div className="flex justify-between">
            <SelectDropdown
              selectedOption={selectedOption}
              options={outputs}
              selectOption={selectOption}
            />
            <input
              className="bg-transparent border-b py-2 text-right"
              placeholder="Amount"
              type="number"
              value={amount || ""}
              onChange={(e) => selectAmount(parseInt(e.target.value))}
            />
          </div>
          {/* <div>Unstake All</div> */}
          <div className="mt-2">
            <div className="flex justify-between">
              <p className="text-xs text-zinc-400">Currently staked</p>
              <p className="text-sm">
                0 <span className="text-zinc-400">{selectedOption}</span>
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-xs text-zinc-400">Rewards available</p>
              <p className="text-sm">
                0 <span className="text-zinc-400">{selectedOption}</span>
              </p>
            </div>
          </div>
        </div>
      );
    case "uniswapv2:remove_liquidity":
      return (
        <div className="p-3">
          <div className="text-custom-grey-1">Output (estimated)</div>
          {selectedOutput?.map(({ id, total }) => (
            <div key={id} className="flex justify-between">
              <div>{id}</div>
              
              <div>{parseFloat(total.toFixed(5))}</div>
            </div>
          ))}
        </div>
      );
    default:
      return <div></div>;
  }
};

export default Output;
