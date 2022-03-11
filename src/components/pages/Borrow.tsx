import { useEffect, useMemo, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import BorrowSelectTokenCard from "@/components/BorrowSelectTokenCard";
import GroupButton from "@/components/GroupButton";
import Button from "@/components/Button";
import Yes from "@/images/Yes";
import No from "@/images/No";
import { TOKENS, TOKEN_LIST } from "@/utils/constants";

const Borrow = () => {
  const { t } = useTranslation();

  const [mainToken, setMainToken] = useState(TOKENS.ETH);
  const [collateral, setCollateral] = useState("");
  const [noviceMode, setNoviceMode] = useState("no");

  const collateralListOfTokens = useMemo(() => {
    const { ETH, FRAX, BOBA, USDC, DAI } = TOKENS;

    if (mainToken === ETH) return [USDC, DAI, BOBA, FRAX];
    if (mainToken === FRAX) return [ETH, USDC];
    // if (mainToken === USDT) return [];
    if (mainToken === BOBA) return [ETH, USDC, DAI];
    if (mainToken === USDC) return [ETH, DAI, BOBA, FRAX];
    if (mainToken === DAI) return [ETH, USDC, BOBA];

    return [];
  }, [mainToken]);

  useEffect(() => {
    if (collateralListOfTokens[0]) {
      setCollateral(collateralListOfTokens[0]);
    }
  }, [collateralListOfTokens]);

  return (
    <div>
      <div className="flex justify-center md:mt-14 mt-2 text-center border-b-4 border-custom-green">
        <div className="md:w-[24rem] md:flex hidden"></div>

        <div className="md:text-5xl text-2xl font-bebas-neue mx-1">
          <Trans i18nKey="borrow.borrowAgainstYourTokens">
            <span className="text-custom-green" />
            <span className="text-custom-pink-1" />
          </Trans>
        </div>

        <div className="md:w-[24rem] md:flex hidden"></div>
      </div>

      <div className="md:m-8 my-4 mx-3 md:flex items-center justify-between">
        <BorrowSelectTokenCard
          tokenList={TOKEN_LIST}
          selected={mainToken}
          selectToken={(token: string) => setMainToken(token)}
        />
        <div className="md:text-7xl text-3xl font-bebas-neue text-custom-blue text-center md:mx-10">
          VS
        </div>
        <BorrowSelectTokenCard
          tokenList={collateralListOfTokens}
          selected={collateral}
          isCollateral
          selectToken={(token: string) => setCollateral(token)}
        />
      </div>

      <div className="md:flex items-center justify-between mx-8">
        <div className="md:text-3xl text-xl">
          <Trans i18nKey="borrow.currentSelection">
            <span className="text-custom-green" />
            <span className="font-bebas-neue text-custom-pink-1" />
            {{
              main: mainToken,
              collateral,
            }}
          </Trans>
        </div>

        <div className="md:flex items-center">
          <button className="font-bebas-neue rounded-lg	border-4 border-custom-green bg-custom-grey-3 md:text-2xl py-0.5 md:w-72 w-full md:mr-6 my-4">
            {t("continue")}
          </button>

          <div className="flex items-center justify-center">
            <span className="font-light mr-2">{t("borrow.noviceMode")}</span>
            <GroupButton
              selectItem={(id: string) => setNoviceMode(id)}
              selectedOption={noviceMode}
              noBackground
              options={[
                {
                  id: "no",
                  children: <No />,
                },
                {
                  id: "yes",
                  children: <Yes />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borrow;
