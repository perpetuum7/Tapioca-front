import { useState } from "react";
import Cube from "@/images/Cube";
import NewCubeModal from "@/components/NewCubeModal";
import { FUROCOMBO_CUBES } from "@/utils/constants";
import { useTranslation } from "react-i18next";

interface ComboList {
  id: string;
}

const Furocombo = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [combo, setCombo] = useState<ComboList[]>([]);

  const selectCube = (id: string) => {
    setCombo((prev) => [...prev, { id }]);
  };

  const removeItem = (id: string) => {
    setCombo(combo.filter((item) => item.id !== id));
  };

  return (
    <div className="flex justify-between mt-4">
      {isModalOpen && (
        <NewCubeModal
          selectCube={selectCube}
          closeModal={() => setIsModalOpen(false)}
        />
      )}

      <div className="basis-1/3"></div>

      <div className="flex flex-col items-center basis-1/3">
        {combo.map(({ id }) => (
          <div key={id}>
            <Cube isActive />
          </div>
        ))}
        <Cube onClick={() => setIsModalOpen(true)} />
      </div>

      <div className="basis-1/3">
        {combo.map(({ id }) => {
          const defi = FUROCOMBO_CUBES.find(
            ({ defiName }) => defiName === id.split(":")[0]
          );
          const feature = defi?.options.find(
            ({ featureName }) => featureName === id.split(":")[1]
          );
          return (
            <div
              className="p-2 bg-custom-grey-4 w-full rounded mb-2 flex items-center"
              key={id}
            >
              <div className="basis-1/3">
                <div className="w-fit bg-custom-green rounded px-2 text-xs text-black font-bold">
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
          );
        })}
      </div>
    </div>
  );
};

export default Furocombo;
