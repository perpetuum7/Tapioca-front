import { ComboList, SelectedDefi } from "@/components/pages/Furucombo";
import { FURUCOMBO_CUBES } from "@/utils/constants";
import { getListOfFurucomboReceiveTokens } from "@/utils/getListOfFurucomboReceiveTokens";

interface Props {
  combo: ComboList[];
}

const InitialFunds = ({ combo }: Props) => {
  const receiveList = getListOfFurucomboReceiveTokens(combo);

  if (!combo.length) return null;
  return (
    <div className="pl-4">
      <div className="text-custom-grey-1 mb-4">Initial Funds</div>
      <ul>
        {combo.map(({ id, amount, selectedOption, outputEstimate, crn }) => {
          if (Object.keys(outputEstimate).length < 1) return;

          const defi = FURUCOMBO_CUBES.find(
            ({ defiName }) => defiName === crn.split(":")[0]
          ) as SelectedDefi;

          return (
            <li className="last:mb-6" key={id}>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <div className="text-lg">{selectedOption}</div>
                  <div className="text-xs">{defi.title}</div>
                </div>
                <div>{amount}</div>
              </div>

              <div className="flex justify-end text-sm text-zinc-400">
                Balance: -
              </div>
            </li>
          );
        })}
      </ul>

      <div className="pl-8">
        <div className="text-custom-grey-1">You will receive</div>
        {receiveList.map(({ id, amount }) => (
          <div className="flex justify-between mt-4" key={id}>
            <div>{id}</div>
            <div>{amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitialFunds;
