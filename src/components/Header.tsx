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
          <div className="flex flex-col">
            <span className="font-bebas-neue text-6xl leading-10">
              {t("header.borrow")}
            </span>
            <span className="subtitle text-4xl leading-8 font-light">
              {t("header.mixologist")}
            </span>
          </div>
        );

      default:
        return <div />;
    }
  }, []);

  return (
    <div className="flex justify-between items-center">
      {titleHeader}

      <div className="flex items-center h-14">
        {address ? (
          <GroupButton
            size="2xl"
            selectedOption="address"
            options={[
              { id: "balance", children: `${balance} ${TOKENS.ETH}` },
              { id: "address", children: formatAddress(address) },
            ]}
          />
        ) : (
          <button
            className="font-bebas-neue rounded-lg	border-4 border-custom-green text-2xl px-3"
            onClick={connectWallet}
          >
            {t("header.connectWallet")}
          </button>
        )}

        <Menu className="ml-8" />
      </div>
    </div>
  );
};

export default Header;
