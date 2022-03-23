import { FURUCOMBO_TYPES } from "@/utils/constants";
import FurucomboClaimOutput from "./FurucomboClaimOutput";
import FurucomboOutputToken from "./FurucomboOutputToken";
import { ComboList } from "@/components/pages/Furucombo";

interface Props {
  type?: string;
  token?: string;
  tokens?: string[];
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
}

const InputOutpuSelection = ({
  type,
  token,
  setCardCube,
  tokens,
  currentSelection,
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

    default:
      return <div></div>;
  }
};

export default InputOutpuSelection;
