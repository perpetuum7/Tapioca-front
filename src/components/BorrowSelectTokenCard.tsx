import { useTranslation } from "react-i18next";
import Arrow from "@/images/Arrow";
import GetToken from "@/images/GetToken";

interface Props {
  selected: string;
  isCollateral?: boolean;
  selectToken: (token: string) => void;
  tokenList: string[];
}

const BorrowSelectTokenCard = ({
  selected,
  isCollateral = false,
  selectToken,
  tokenList,
}: Props) => {
  const { t } = useTranslation();
  const index = tokenList.findIndex((item) => item === selected);

  return (
    <div className="w-full rounded-lg	border-4 border-custom-blue flex items-center flex-col bg-custom-grey-3 pt-14 px-6 pb-3">
      <div className="flex items-center">
        <button
          onClick={() => {
            const previusIndex = (index === 0 ? tokenList.length : index) - 1;
            selectToken(tokenList[previusIndex]);
          }}
        >
          <Arrow direction="left" />
        </button>

        <div className="w-40 h-40 mx-10">
          <GetToken token={selected} isSelected width="150px" height="150px" />
        </div>
        <button
          onClick={() => {
            const previusIndex = index === tokenList.length - 1 ? 0 : index + 1;
            selectToken(tokenList[previusIndex]);
          }}
        >
          <Arrow />
        </button>
      </div>

      <div className="text-5xl font-bebas-neue text-custom-pink-1">
        {selected}
      </div>

      <div className="flex justify-between">
        {tokenList.map((token) => (
          <div
            key={token}
            className="m-1 cursor-pointer"
            onClick={() => selectToken(token)}
          >
            <GetToken
              token={token}
              isSelected={selected === token}
              width="60px"
              height="60px"
            />
          </div>
        ))}
      </div>

      <div className="text-5xl font-bebas-neue">
        {t(
          isCollateral
            ? "borrow.selectColleteralToken"
            : "borrow.selectMainToken"
        )}
      </div>

      <div className="italic">
        {t(
          isCollateral ? "borrow.chooseBorrowToken" : "borrow.chooseMainToken"
        )}
      </div>
    </div>
  );
};

export default BorrowSelectTokenCard;
