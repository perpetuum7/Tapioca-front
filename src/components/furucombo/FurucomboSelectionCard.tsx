import { useEffect, useState } from "react";
import uuid from "uuid";
import { FURUCOMBO_CUBES } from "@/utils/constants";
import Output from "@/components/furucombo/Output";
import Input from "@/components/furucombo/Input";
import {
  OutputEstimateProps,
  ComboList,
  SelectedDefi,
} from "@/components/pages/Furucombo";

interface Props {
  goBack: () => void;
  currentSelection: string;
  setCardCube: (props: ComboList) => void;
}

const FurucomboSelectionCard = ({
  goBack,
  currentSelection,
  setCardCube,
}: Props) => {
  const currentSelectedDefi = FURUCOMBO_CUBES.find(
    ({ defiName }) => defiName === currentSelection.split(":")[0]
  ) as SelectedDefi;

  const currentSelectedFeature = currentSelectedDefi?.options.find(
    ({ featureName }) => featureName === currentSelection.split(":")[1]
  );

  const [amount, setAmount] = useState<null | number>(null);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (currentSelectedFeature?.outputs?.length)
      setSelectedOption(currentSelectedFeature?.outputs?.[0]);

    if (currentSelectedFeature?.inputs?.length)
      setSelectedOption(currentSelectedFeature?.inputs?.[0]);
  }, []);

  const isDisabled = !!currentSelectedFeature?.outputs?.[0] && !amount;

  const currentOutput =
    currentSelectedFeature?.outputEstimate?.find(
      ({ id }) => id === selectedOption
    ) || ({} as OutputEstimateProps);

  return (
    <div className="bg-custom-grey-4 w-full rounded-lg mb-2">
      <div className="flex items-center p-2">
        <div className="basis-1/3">
          <button
            className="w-fit border rounded px-2 text-xs font-bold"
            onClick={goBack}
          >
            {`<`}
          </button>
        </div>
        <div className="basis-1/3 text-center text-lg">
          {currentSelectedDefi?.title}
        </div>
        <div className="basis-1/3" />
      </div>

      <div className="mt-2 flex justify-center">
        <div className="border rounded px-10 p-1 text-xs">
          {currentSelectedFeature?.title}
        </div>
      </div>

      <div className="mt-1 px-2">
        {currentSelectedFeature?.inputs?.length && (
          <Input
            currentSelection={currentSelection}
            inputs={currentSelectedFeature.inputs}
            selectedOption={selectedOption}
            selectOption={(op: string) => setSelectedOption(op)}
            amount={amount}
            selectAmount={(amount: number) => setAmount(amount)}
          />
        )}
        <Output
          currentSelection={currentSelection}
          selectedOption={selectedOption}
          selectOption={(op: string) => setSelectedOption(op)}
          outputs={currentSelectedFeature?.outputs}
          amount={amount}
          selectAmount={(amount: number) => setAmount(amount)}
          currentOutput={currentOutput}
        />
      </div>

      <button
        disabled={isDisabled}
        onClick={() =>
          setCardCube({
            crn: currentSelection,
            id: uuid.v4(),
            selectedOption,
            amount,
            outputEstimate: currentOutput,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        Set
      </button>
    </div>
  );
};

export default FurucomboSelectionCard;
