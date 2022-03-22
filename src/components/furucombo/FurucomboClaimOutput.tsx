import { useTranslation } from "react-i18next";
import uuid from "uuid";
import { ComboList } from "@/components/pages/Furucombo";

interface Props {
  token?: string;
  tokenBalance?: number;
  setCardCube: (props: ComboList) => void;
}

const FurucomboClaimOutput = ({
  token = "",
  tokenBalance = 0,
  setCardCube,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="px-3">
          <div className="text-custom-grey-1">{t("furucombo.output")}</div>
          <div className="flex justify-between text-xl">
            <div>{token}</div>
            <div>{tokenBalance}</div>
          </div>

          {token === "COMBO" ? (
            <div>
              <div>
                <div className="flex justify-between text-xs text-custom-grey-1 pt-3">
                  <div>{t("furucombo.combo.retroactiveRewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-custom-grey-1 pt-1">
                  <div>{t("furucombo.combo.stakingComboRewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-custom-grey-1 pt-1">
                  <div>{t("furucombo.combo.stakingUniV2Rewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-custom-grey-1 pt-1">
                  <div>{t("furucombo.combo.usageRewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <button
        disabled={!tokenBalance}
        onClick={() =>
          setCardCube({
            crn: token,
            id: uuid.v4(),
            amount: tokenBalance,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("furucombo.set")}
      </button>
    </div>
  );
};

export default FurucomboClaimOutput;
