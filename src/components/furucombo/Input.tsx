import SelectDropdown from "@/components/SelectDropdown";

interface Props {
  currentSelection: string;
  inputs?: string[];
  selectedOption?: string;
  selectOption: (op: string) => void;
  amount: null | number;
  selectAmount: (amount: number) => void;
}

const Input = ({
  currentSelection,
  inputs,
  selectedOption,
  selectOption,
  amount,
  selectAmount,
}: Props) => {
  switch (currentSelection) {
    case "uniswapv2:remove_liquidity":
      return (
        <div className="px-3">
          <div className="text-custom-grey-1">Input</div>
          <div className="flex justify-between">
            <SelectDropdown
              selectedOption={selectedOption}
              options={inputs}
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
        </div>
      );
    default:
      return <div></div>;
  }
};

export default Input;
