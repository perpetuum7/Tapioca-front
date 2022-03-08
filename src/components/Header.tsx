import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { TOKENS } from "@/utils/constants";

import Menu from "@/images/Menu";
import formatAddress from "@/utils/formatAddress";
import { WalletContext } from "@/wallet/WalletContext";

const Header = () => {
  const { t } = useTranslation();
  const { wallet, connectWallet } = useContext(WalletContext);
  const { address, balance } = wallet;

  return (
    <div className="header">
      <div className="header--title"></div>

      <div className="row">
        {address ? (
          <div className="wallet-container">
            <div className="wallet-container--balance">
              {balance} {TOKENS.ETH}
            </div>
            <button className="wallet-container--button">
              {formatAddress(address)}
            </button>
          </div>
        ) : (
          <button
            className="button button--lg button--green"
            onClick={connectWallet}
          >
            {t("header.connectWallet")}
          </button>
        )}

        <div className="header--menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
