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
    setCollateral(collateralListOfTokens[0]);
  }, [collateralListOfTokens]);

  return (
    <div className="borrow">
          <div className="borrow--header">
        <div className="borrow--header-image"></div>

        <div>
          <Trans i18nKey="borrow.borrowAgainstYourTokens">
            <span className="text--green" />
            <span className="text--pink" />
          </Trans>
        </div>

        <div className="borrow--header-image"></div>
      </div>

      <div className="borrow--content">
        <div className="borrow-row">
          <BorrowSelectTokenCard
            tokenList={TOKEN_LIST}
            selected={mainToken}
            selectToken={(token: string) => setMainToken(token)}
          />
          <div className="vs">VS</div>
          <BorrowSelectTokenCard
            tokenList={collateralListOfTokens}
            selected={collateral}
            isCollateral
            selectToken={(token: string) => setCollateral(token)}
          />
        </div>
      </div>
    </div>
  );
};

export default Borrow;
