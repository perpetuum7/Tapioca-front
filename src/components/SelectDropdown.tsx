import { useState } from "react";
import Chevron from "@/images/Chevron";

interface Props {
  selectedOption?: string;
  options?: string[];
  selectOption: (op: string) => void;
}

const SelectDropdown = ({ selectedOption, options, selectOption }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center w-full rounded-md py-2 text-lg"
      >
        {selectedOption}
        <Chevron direction={isOpen ? "down" : "up"} className="ml-2 mb-0.5" />
      </button>
      {isOpen && (
        <div className="absolute bg-custom-grey-2 rounded-md shadow-lg pl-1 pr-14">
          <div className="flex flex-col items-start">
            {options?.map((op) => (
              <button
                className="py-1"
                onClick={() => {
                  selectOption(op);
                  setIsOpen(false);
                }}
                key={op}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
