import Close from "@/images/Close";
import { FURUCOMBO_CUBES } from "@/utils/constants";
import GradientButton from "@/components/furucombo/GradientButton";

interface Props {
  closeModal: () => void;
  selectCube: (id: string) => void;
}

const NewCubeModal = ({ closeModal, selectCube }: Props) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0">
        <div className="fixed inset-0 bg-black opacity-90 transition-opacity" />

        <div className="relative inline-block overflow-hidden w-full h-full">
          <div className="md:p-4 p-0.5">
            <div className="flex justify-between">
              <Close onClick={closeModal} />
              <div>New Cube</div>
              <div />
            </div>

            <div className="flex justify-center mt-10">
              <div className="md:w-3/6 overflow-y-auto max-h-[85vh]">
                {FURUCOMBO_CUBES.map(({ title, defiName, options, colors }) => {
                  return (
                    <div key={defiName} className="mb-4">
                      <div>{title}</div>
                      <div className="flex flex-wrap">
                        {options.map(({ featureName, title }) => (
                          <GradientButton
                            id={featureName}
                            onClick={() => {
                              selectCube(`${defiName}:${featureName}`);
                              closeModal();
                            }}
                            colors={colors}
                            title={title}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCubeModal;
