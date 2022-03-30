import { FURUCOMBO_TYPES } from "@/utils/constants";
import FurucomboClaimOutput from "./FurucomboClaimOutput";
import FurucomboOutputToken from "./FurucomboOutputToken";
import FurucomboAddress from "./FurucomboAddress";
import FurucomboBridge from "./FurucomboBridge";
import FurucomboInputToken from "./FurucomboInputToken";
import FurucomboMultipleInputs from "./FurucomboMultipleInputs";
import { ComboList, OutputEstimateProps } from "@/components/pages/Furucombo";

interface Props {
  type?: string;
  token?: string;
  network?: string;
  tokens?: string[];
  outputsOptions?: OutputEstimateProps[];
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
}

const InputOutpuSelection = ({
  type,
  token,
  setCardCube,
  tokens,
  outputsOptions,
  currentSelection,
  network,
}: Props) => {
  switch (type) {
    case FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT:
      return (
        <FurucomboClaimOutput
          token={token}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN:
      return (
        <FurucomboOutputToken
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_ADDRESS:
      return (
        <FurucomboAddress
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_BRIGDE:
      return (
        <FurucomboBridge
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
          network={network}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN:
      return (
        <FurucomboInputToken
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_MULTIPLE_INPUTS:
      return (
        <FurucomboMultipleInputs
          outputsOptions={outputsOptions}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    default:
      return <div></div>;
  }
};

export default InputOutpuSelection;
