import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cube from "@/images/Cube";
import NewCubeModal from "@/components/furucombo/NewCubeModal";
import InitialFunds from "@/components/furucombo/InitialFunds";
import FurucomboSelectionCard from "@/components/furucombo/FurucomboSelectionCard";
import { FURUCOMBO_CUBES } from "@/utils/constants";
import SelectedCard from "../furucombo/SelectedCard";

export interface OutputEstimateProps {
  id: string;
  [token: string]: number | string;
}
export interface ComboList {
  id: string;
  crn: string;
  selectedOption?: string;
  amount?: null | number;
  outputEstimate: OutputEstimateProps;
}

export interface FeatureProps {
  featureName: string;
  title: string;
  outputs?: string[];
  inputs?: string[];
  outputEstimate?: OutputEstimateProps[];
}

export interface SelectedDefi {
  title: string;
  defiName: string;
  colors: {
    from: string;
    to: string;
  };
  options: FeatureProps[];
}

const Furucombo = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("");
  const [combo, setCombo] = useState<ComboList[]>([]);

  const selectCube = (id: string) => {
    setCurrentSelection(id);
  };

  const setCardCube = (combo: ComboList) => {
    setCombo((prev) => [...prev, combo]);
    setCurrentSelection("");
  };

  const removeItem = (id: string) => {
    setCombo(combo.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (combo?.length) localStorage.setItem("combo", JSON.stringify(combo));
  }, [combo]);

  useEffect(() => {
    const localStorageCombo = localStorage.getItem("combo");
    if (localStorageCombo) setCombo(JSON.parse(localStorageCombo));
  }, []);

  return (
    <div className="flex justify-between mt-4">
      {isModalOpen && (
        <NewCubeModal
          selectCube={selectCube}
          closeModal={() => setIsModalOpen(false)}
        />
      )}

      <div className="basis-1/3">
        <InitialFunds combo={combo} />
      </div>

      <div className="basis-2/3">
        {combo.map((combo) => (
          <div key={combo.id} className="flex items-center">
            <div className="basis-1/2 flex justify-center">
              <Cube isActive />
            </div>
            <div className="basis-1/2">
              <SelectedCard {...combo} removeItem={removeItem} />
            </div>
          </div>
        ))}

        <div className="flex items-center">
          <div className="basis-1/2 flex justify-center">
            <Cube onClick={() => setIsModalOpen(true)} />
          </div>
          <div className="basis-1/2">
            {currentSelection && (
              <FurucomboSelectionCard
                goBack={() => {
                  setCurrentSelection("");
                  setIsModalOpen(true);
                }}
                setCardCube={setCardCube}
                currentSelection={currentSelection}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furucombo;
