import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import BorrowSelectTokenCard from "@/components/BorrowSelectTokenCard";

const Borrow = () => {
  const { t } = useTranslation();

  const [mainToken, setMainToken] = useState("DAI");
  const [collateral, setCollateral] = useState("ETH");
  const [noviceMode, setNoviceMode] = useState("no");

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
            selected={mainToken}
            selectToken={(token: string) => setMainToken(token)}
          />
          <div className="vs">VS</div>
          <BorrowSelectTokenCard
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
