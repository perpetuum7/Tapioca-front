import { ComboList, SelectedDefi } from "@/components/pages/Furucombo";
import { FURUCOMBO_CUBES } from "@/utils/constants";
import { useTranslation } from "react-i18next";

interface Props extends ComboList {
  removeItem: (id: string) => void;
}

const SelectedCard = ({
  id,
  selectedOption,
  amount,
  crn,
  outputEstimate,
  removeItem,
}: Props) => {
  const { t } = useTranslation();

  const defi = FURUCOMBO_CUBES.find(
    ({ defiName }) => defiName === crn.split(":")[0]
  ) as SelectedDefi;

  const feature = defi?.options.find(
    ({ featureName }) => featureName === crn.split(":")[1]
  );

  const selectedOutput = Object.keys(outputEstimate)
    .filter((id) => id !== "id")
    .map((id) => {
      const total = outputEstimate[id] as number;
      return { id, total: total * (amount || 0) };
    });

  return (
    <div className="p-2 bg-custom-grey-4 w-full rounded-lg mb-2" key={id}>
      <div className="flex items-center">
        <div className="basis-1/3">
          <div
            style={{
              background: `linear-gradient(to right, ${defi.colors.from}, ${defi.colors.to})`,
            }}
            className="w-fit rounded px-2 py-0.5 text-xs font-bold"
          >
            {feature?.title}
          </div>
        </div>
        <div className="basis-1/3 text-center">{defi?.title}</div>
        <button
          className="basis-1/3 text-right text-xs underline"
          onClick={() => removeItem(id)}
        >
          {t("delete")}
        </button>
      </div>

      <div className="flex justify-between m-2 items-center">
        <div className="text-xl">{selectedOption}</div>
        <div className="text-lg">{amount}</div>
      </div>

      {selectedOutput.length ? (
        <div className="border-t border-zinc-600">
          {selectedOutput.map(({ id, total }) => (
            <div key={id} className="m-2 flex justify-between">
              <div>{id}</div>
              <div>{parseFloat(total.toFixed(5))}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SelectedCard;
