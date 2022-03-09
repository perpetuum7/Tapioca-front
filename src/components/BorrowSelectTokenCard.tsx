import { useTranslation } from "react-i18next";
import Arrow from "@/images/Arrow";
import GetToken from "@/images/GetToken";
import { TOKEN_LIST } from "@/utils/constants";

interface Props {
  selected: string;
  isCollateral?: boolean;
  selectToken: (token: string) => void;
}

const BorrowSelectTokenCard = ({
  selected,
  isCollateral = false,
  selectToken,
}: Props) => {
  const { t } = useTranslation();
  const index = TOKEN_LIST.findIndex((item) => item === selected);

  return (
    <div className="select-token-card">
      <div className="select-token-card--row">
        <button
          className="clickable-area"
          onClick={() => {
            const previusIndex = (index === 0 ? TOKEN_LIST.length : index) - 1;
            selectToken(TOKEN_LIST[previusIndex]);
          }}
        >
          <Arrow direction="left" />
        </button>
        <div className="selected-token">
          <GetToken token={selected} isSelected width="150px" height="150px" />
        </div>
        <button
          className="clickable-area"
          onClick={() => {
            const previusIndex =
              index === TOKEN_LIST.length - 1 ? 0 : index + 1;
            selectToken(TOKEN_LIST[previusIndex]);
          }}
        >
          <Arrow />
        </button>
      </div>

      <div className="selected-token--name">{selected}</div>

      <div className="token-list-row">
        {TOKEN_LIST.map((token) => (
          <div
            key={token}
            className="token-list-row--item"
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

      <div className="select-token-card--message">
        {t(
          isCollateral
            ? "borrow.selectColleteralToken"
            : "borrow.selectMainToken"
        )}
      </div>

      <div className="select-token-card--sub-message">
        {t(
          isCollateral ? "borrow.chooseBorrowToken" : "borrow.chooseMainToken"
        )}
      </div>
    </div>
  );
};

export default BorrowSelectTokenCard;
