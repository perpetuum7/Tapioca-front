import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { TOKENS } from "@/utils/constants";

import Menu from "@/images/Menu";
import GroupButton from "@/components/GroupButton";
import formatAddress from "@/utils/formatAddress";
import { WalletContext } from "@/wallet/WalletContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { wallet, connectWallet } = useContext(WalletContext);
  const { address, balance } = wallet;

  const titleHeader = useMemo(() => {
    const { pathname } = useLocation();

    switch (pathname) {
      case "/borrow":
        return (
          <div className="header__title">
            <span className="main-title">{t("header.borrow")}</span>
            <span className="subtitle">{t("header.mixologist")}</span>
          </div>
        );

      default:
        return <div />;
    }
  }, []);

  return (
    <div className="header">
      {titleHeader}

      <div className="row">
        {address ? (
          <GroupButton
            size="lg"
            selectedOption="address"
            options={[
              { id: "balance", children: `${balance} ${TOKENS.ETH}` },
              { id: "address", children: formatAddress(address) },
            ]}
          />
        ) : (
          <button
            className="button button--lg button--green"
            onClick={connectWallet}
          >
            {t("header.connectWallet")}
          </button>
        )}

        <div className="header__menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
