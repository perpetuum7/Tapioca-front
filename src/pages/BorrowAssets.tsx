import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import GetToken from "@/images/GetToken";
import { useState } from "react";
import Input from "@/components/Input";
import MaxButton from "@/images/Max-button.png";
import WalletButton from "@/images/Wallet-button.png";
import Button from "@/components/Button";
import Miami from "@/images/Miami";
import Bubbles from "@/images/Bubbles";

const getQuery = (search: string, query: string) => {
  const queries = new URLSearchParams(search);
  return queries.get(query);
};

const MAIN_QUERY = "main";
const COLLATERAL_QUERY = "collateral";

const ACTIONS = {
  BORROW: "borrow",
  REPAY: "repay",
} as { [key: string]: string };

const BorrowAssets = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [action, setAction] = useState(ACTIONS.BORROW);

  const main = getQuery(location.search, MAIN_QUERY);
  const collateral = getQuery(location.search, COLLATERAL_QUERY);

  if (!main || !collateral) return <Navigate to="/" />;

  return (
    <div className="md:flex md:gap-x-4 md:pt-10">
      <div className="basis-1/4 bg-custom-grey-4/50 rounded-[30px] hidden md:flex flex-col justify-between">
        <div className="p-8">
          <div className="uppercase text-5xl font-bebas-neue leading-10">
            {t("borrow.borrowAssets.addCollateral")}
          </div>
          <div className="pt-4">
            {t("borrow.borrowAssets.gainExposureToTokens")}
          </div>
        </div>

        <div className="h-full">
          <Miami className="rounded-[30px]" />
        </div>
      </div>

      <div className="w-full md:basis-1/2 md:bg-custom-grey-4/50 rounded-[30px]">
        <div className="p-8 pb-2">
          <div className="uppercase text-5xl font-bebas-neue leading-10">
            {t("borrow.borrowAssets.borrowToken", { token: main })}
          </div>
          <div className="flex items-center pt-2">
            <GetToken token={main} isSelected className="w-11 h-11" />
            <GetToken token={collateral} isSelected className="w-11 h-11" />
            <div className="text-sm ml-2 text-zinc-400">
              <div>
                {t("borrow.borrowAssets.collateral")}:
                <span className="text-white ml-0.5">{collateral}</span>
              </div>
              <div>
                {t("borrow.borrowAssets.oracle")}:
                <span className="text-white ml-0.5">Chainlink</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-custom-green p-8">
          <div className="flex justify-between">
            <div>
              <div> {t("borrow.borrowAssets.collateral")}</div>
              <div className="text-3xl font-bold text-custom-green">
                0 {collateral}
              </div>
              <div className="text-sm text-zinc-400">$0,00</div>
            </div>
            <div>
              <div>{t("borrow.borrowAssets.borrowed")}</div>
              <div className="text-3xl font-bold text-custom-pink-2">
                0 {main}
              </div>
              <div className="text-sm text-zinc-400">$0,00</div>
            </div>
            <div className="mr-2">
              <div> {t("borrow.borrowAssets.apr")}</div>
              <div className="text-3xl font-bold">0,25%</div>
            </div>
          </div>

          <div className="my-6 flex bg-custom-blue items-center rounded-lg p-1">
            {Object.keys(ACTIONS).map((key: string) => (
              <button
                onClick={() => setAction(ACTIONS[key])}
                className={[
                  "flex items-center justify-center rounded-lg font-bebas-neue text-4xl basis-1/2 leading-20 pt-1",
                  action === ACTIONS[key] ? "bg-custom-purple" : "",
                ].join(" ")}
              >
                {ACTIONS[key]}
              </button>
            ))}
          </div>

          <div className="uppercase text-5xl font-bebas-neue leading-10 mb-4">
            {t("borrow.borrowAssets.borrowToken", { token: main })}
          </div>

          <Input
            label={
              <div className="flex items-center">
                {t("borrow.borrowAssets.addCollateralFrom", {
                  token: collateral,
                })}
                <img src={WalletButton} className="ml-1" />
              </div>
            }
            subLabel={t("borrow.borrowAssets.balance", {
              amount: "0.05600000",
            })}
            placeholder="0.0"
            customRightItem={
              <button>
                <img src={MaxButton} />
              </button>
            }
          />

          <Input
            containerCustomClasses="mt-5"
            label={
              <div className="flex items-center">
                {t("borrow.borrowAssets.borrowTo", {
                  token: main,
                })}
                <img src={WalletButton} className="ml-1" />
              </div>
            }
            subLabel={t("borrow.borrowAssets.balance", {
              amount: "0.05600000",
            })}
            placeholder="0.0"
            customRightItem={
              <button>
                <img src={MaxButton} />
              </button>
            }
          />

          <Button customClasses="text-4xl mt-8 w-full pt-1">
            {t("approve")}
          </Button>
        </div>
      </div>

      <div className="basis-1/4 bg-custom-grey-4/50 rounded-[30px] hidden md:flex flex-col items-center py-2 px-8">
        <div>
          <Bubbles className="px-8" />
        </div>

        <div className="mt-4 w-full">
          <div>Market</div>
          <div className="flex justify-between mt-3 text-zinc-300">
            <div>APR 0,25%</div>
            <div>0,25%</div>
          </div>

          <div className="flex justify-between mt-3 text-zinc-300">
            <div>LTV</div>
            <div>75%</div>
          </div>

          <div className="flex justify-between mt-3 text-zinc-300">
            <div>Total</div>
            <div>711,961 DAI</div>
          </div>

          <div className="flex justify-between mt-3 text-zinc-300">
            <div>Availalble</div>
            <div>572,688 DAI</div>
          </div>

          <div className="flex justify-between mt-3 text-zinc-300">
            <div>Borrowed</div>
            <div>19.56%</div>
          </div>

          <div className="flex justify-between mt-3 gap-3">
            <Button
              buttonColor="pink"
              customClasses="w-full text-md py-0.5 px-0 bg-custom-grey-3"
            >
              accrue
            </Button>
            <Button
              buttonColor="pink"
              customClasses="w-full text-md py-0.5 px-0 bg-custom-grey-3"
            >
              update price
            </Button>
          </div>

          <div className="mt-6">Oracle - Witnet</div>
          <div className="flex justify-between mt-3 text-zinc-300">
            <div>Name</div>
            <div>Chainlink</div>
          </div>

          <div className="mt-6">Tapioca</div>
          <div className="flex justify-between mt-3 text-zinc-300">
            <div>WETH Stratagy</div>
            <div>Active</div>
          </div>

          <div className="flex justify-between mt-3 text-zinc-300">
            <div>Avg. APY</div>
            <div>0%</div>
          </div>

          <div className="flex justify-between mt-3 text-zinc-300">
            <div>Target Percentage</div>
            <div>75.00%</div>
          </div>

          <div className="flex justify-between mt-3 text-zinc-300">
            <div>Current Percentage</div>
            <div>68.27%</div>
          </div>

          <Button
            buttonColor="pink"
            customClasses="w-full text-md py-0.5 px-0 bg-custom-grey-3 my-3"
          >
            rebalance
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BorrowAssets;
