import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import GroupButton from "@/components/GroupButton";
import Yes from "@/images/Yes";
import No from "@/images/No";
import Button from "@/components/Button";
import HelpModal from "@/components/HelpModal";

interface Props {
  mainToken: string;
  collateral: string;
  setNoviceMode: (value: string) => void;
  noviceMode: string;
}

const BorrowFooter = ({
  mainToken,
  collateral,
  setNoviceMode,
  noviceMode,
}: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="md:flex items-center justify-between mx-8">
      <div className="flex items-center">
        <div className="md:text-2xl text-xl">
          <Trans i18nKey="borrow.currentSelection">
            <span className="text-custom-green" />

            <span className="font-bebas-neue text-custom-pink-1" />
            {{
              main: mainToken,
              collateral,
            }}
          </Trans>
        </div>

        <HelpModal video="https://youtu.be/PcEzWRRkNcQ" />
      </div>

      <div className="md:flex items-center">
        <Button
          onClick={() =>
            navigate(`/borrow?main=${mainToken}&collateral=${collateral}`)
          }
          customClasses="bg-custom-grey-3 md:text-2xl py-0.5 md:w-72 w-full md:mr-2 my-4"
        >
          {t("continue")}
        </Button>

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
  );
};

export default BorrowFooter;
