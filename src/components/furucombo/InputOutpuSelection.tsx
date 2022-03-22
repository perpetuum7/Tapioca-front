import { FURUCOMBO_TYPES } from "@/utils/constants";
import FurucomboClaimOutput from "./FurucomboClaimOutput";
import { ComboList } from "@/components/pages/Furucombo";

interface Props {
  type?: string;
  token?: string;
  setCardCube: (props: ComboList) => void;
}

const InputOutpuSelection = ({ type, token, setCardCube }: Props) => {
  switch (type) {
    case FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT:
      return <FurucomboClaimOutput token={token} setCardCube={setCardCube} />;

    default:
      return <div></div>;
  }
};

export default InputOutpuSelection;
