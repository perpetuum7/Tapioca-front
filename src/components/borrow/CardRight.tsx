import Button from "@/components/Button";
import Bubbles from "@/images/Bubbles";

const CardRight = () => {
  return (
    <div className="basis-1/4 md:bg-custom-grey-4/50 md:rounded-[30px] py-10 md:py-2 md:px-8">
      <div>
        <Bubbles className="px-8" />
      </div>

      <div className="hidden md:flex flex-col mt-4 w-full">
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
  );
};

export default CardRight;
