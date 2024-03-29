import { useTranslation } from "react-i18next";
import GetToken from "@/images/GetToken";
import { useState } from "react";
import Input from "@/components/Input";
import MaxButton from "@/images/Max-button.png";
import WalletButton from "@/images/Wallet-button.png";
import Button from "@/components/Button";
import BubbleGreen from "@/images/BubbleGreen";
import { borrowHooks } from "@/utils/borrowHooks";

const ACTIONS = {
  BORROW: "borrow",
  REPAY: "repay",
} as { [key: string]: string };

interface Props {
  main: string;
  collateral: string;
  isDisabled: boolean;
  address: string;
}

const BorrowCard = ({ main, collateral, isDisabled, address }: Props) => {
  const useContract = borrowHooks();

  const [action, setAction] = useState(ACTIONS.BORROW);
  const [collateralAmount, setCollateralAmount] = useState("");
  const [mainAmount, setMainAmount] = useState("");

  const { inProgress, assetBalance, depositedCollateral, borrow, status } =
    useContract(address);

  const { t } = useTranslation();

  return (
    <div className="w-full md:basis-1/2 md:bg-custom-grey-4/50 rounded-[30px]">
      <div className="px-3 md:p-8 md:pb-2">
        <div className="hidden md:flex uppercase text-5xl font-bebas-neue leading-10">
          {t("borrow.borrowAssets.borrowToken", { token: main })}
        </div>
        <div className="flex items-center pt-2">
          <GetToken
            token={main}
            isSelected
            className="w-8 h-8 md:w-11 w-8 h-8 md:h-11"
          />
          <GetToken
            token={collateral}
            isSelected
            className="w-8 h-8 md:w-11 w-8 h-8 md:h-11 ml-2"
          />
          <div className="hidden md:flex flex-col text-sm ml-2 text-zinc-400">
            <div>
              {t("borrow.borrowAssets.collateral")}:
              <span className="text-white ml-0.5">{collateral}</span>
            </div>
            <div>
              {t("borrow.borrowAssets.oracle")}:
              <span className="text-white ml-0.5">Chainlink</span>
            </div>
          </div>

          <div className="md:hidden flex items-center ml-4 gap-2 text-xl">
            <div>{main}</div>
            <BubbleGreen />
            <div>{collateral}</div>
          </div>
        </div>
      </div>

      <div className="md:border-t-4 border-custom-green md:p-8 p-4">
        <div className="flex justify-between">
          <div className="basis-2/5">
            <div> {t("borrow.borrowAssets.collateral")}</div>
            <div className="text-lg md:text-3xl font-bold text-custom-green">
              {collateralAmount || 0} {collateral}
            </div>
            <div className="text-xs md:text-sm text-zinc-400">$0,00</div>
          </div>
          <div className="basis-2/5">
            <div>{t("borrow.borrowAssets.borrowed")}</div>
            <div className="text-lg md:text-3xl font-bold text-custom-pink-2">
              {mainAmount || 0} {main}
            </div>
            <div className="text-xs md:text-sm text-zinc-400">$0,00</div>
          </div>
          <div className="basis-1/5">
            <div> {t("borrow.borrowAssets.apr")}</div>
            <div className="text-lg md:text-3xl font-bold">0,25%</div>
          </div>
        </div>

        <div className="my-6 flex bg-custom-blue items-center rounded-lg p-1">
          {Object.keys(ACTIONS).map((key: string) => (
            <button
              key={key}
              onClick={() => setAction(ACTIONS[key])}
              className={[
                "flex items-center justify-center rounded-lg font-bebas-neue text-xl md:text-4xl basis-1/2 leading-20 pt-1",
                action === ACTIONS[key] ? "bg-custom-purple" : "",
              ].join(" ")}
            >
              {ACTIONS[key]}
            </button>
          ))}
        </div>

        <div className="uppercase text-xl md:text-5xl font-bebas-neue md:leading-10 md:mb-4">
          {t("borrow.borrowAssets.borrowToken", { token: main })}
        </div>

        <Input
          label={
            <div className="flex items-center">
              {t("borrow.borrowAssets.addCollateralFrom", {
                token: collateral,
              })}
              <img src={WalletButton} className="ml-1 hidden md:flex" />
            </div>
          }
          subLabel={t("borrow.borrowAssets.balance", {
            amount: assetBalance,
          })}
          placeholder="0.0"
          customRightItem={
            <button onClick={() => setCollateralAmount(assetBalance)}>
              <img src={MaxButton} />
            </button>
          }
          type="number"
          value={collateralAmount}
          onChange={(e) => setCollateralAmount(e.target.value)}
          disabled={inProgress}
        />

        <Input
          containerCustomClasses="mt-5"
          label={
            <div className="flex items-center">
              {t("borrow.borrowAssets.borrowTo", {
                token: main,
              })}
              <img src={WalletButton} className="ml-1 hidden md:flex" />
            </div>
          }
          subLabel={t("borrow.borrowAssets.balance", {
            amount: depositedCollateral,
          })}
          placeholder="0.0"
          customRightItem={
            <button onClick={() => setMainAmount(depositedCollateral)}>
              <img src={MaxButton} />
            </button>
          }
          type="number"
          value={mainAmount}
          onChange={(e) => setMainAmount(e.target.value)}
          disabled={inProgress}
        />

        <Button
          onClick={() =>
            borrow({
              collateralAmount: collateralAmount
                ? parseFloat(collateralAmount)
                : 0,
              borrowAmount: mainAmount ? parseFloat(mainAmount) : 0,
            })
          }
          customClasses="text-2xl md:text-4xl mt-8 w-full md:pt-1"
          disabled={
            isDisabled || !mainAmount || !collateralAmount || inProgress
          }
          isLoading={inProgress}
          screenReaderText={status}
        >
          {t("approve")}
        </Button>
      </div>
    </div>
  );
};

export default BorrowCard;
