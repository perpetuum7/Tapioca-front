import { ethers } from "ethers";
import parseBigBalance from "@/utils/parseBigBalance";
import { loadContract__TEST } from "tapioca-sdk";
import { useEffect, useState } from "react";

export const loanHooks = () => {
  const winEthereum = (window as any).ethereum;
  const provider = new ethers.providers.Web3Provider(winEthereum);
  const signer = provider.getSigner();
  const { mixologist, beachbar, usdc, weth } = loadContract__TEST(signer);

  const useWethContract = (address: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAproving, setIsApproving] = useState(false);
    const [isMinting, setIsMiting] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [balance, setBalance] = useState("0");

    const updateBalance = async () => {
      setIsLoading(true);
      const balance = await weth.balanceOf(address);
      setBalance(parseBigBalance(balance));
      setIsLoading(false);
    };

    const mint = async ({ amount = 1 }) => {
      setIsMiting(true);
      try {
        const mintValue = ethers.BigNumber.from((1e18).toString()).mul(amount);
        const mint = await weth.freeMint(mintValue);
        await mint.wait();
        updateBalance();
      } catch (err: any) {
        // TODO: message user the error
        console.error(err.message);
      }

      setIsMiting(false);
    };

    const checkIsApproved = async () => {
      setIsApproving(true);
      const res = await weth["allowance(address,address)"](
        address,
        beachbar.address
      );

      setIsApproved(ethers.BigNumber.from(res ?? 0).gt(0));
      setIsApproving(false);
    };

    const approve = async () => {
      setIsApproving(true);
      try {
        const res = await weth["approve(address,uint256)"](
          beachbar.address,
          ethers.constants.MaxUint256
        );

        res.wait();
        setIsApproved(true);
      } catch (err: any) {
        // TODO: message user the error
        console.error(err.message);
        setIsApproving(false);
      }
    };

    useEffect(() => {
      updateBalance();
      checkIsApproved();
    }, []);

    return {
      balance,
      updateBalance,
      isLoading,
      isMinting,
      mint,
      approve,
      isApproved,
      isAproving,
    };
  };

  const useUsdcContract = (address: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMinting, setIsMiting] = useState(false);
    const [isAproving, setIsApproving] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [balance, setBalance] = useState("0");

    const updateBalance = async () => {
      setIsLoading(true);
      const balance = await usdc.balanceOf(address);
      setBalance(parseBigBalance(balance));
      setIsLoading(false);
    };

    const mint = async ({ amount = 1 }) => {
      setIsMiting(true);

      try {
        const mintValue = ethers.BigNumber.from((1e18).toString()).mul(amount);
        const mint = await usdc.freeMint(mintValue);
        await mint.wait();
        updateBalance();
      } catch (err: any) {
        // TODO: message user the error
        console.error(err.message);
      }

      setIsMiting(false);
    };

    const checkIsApproved = async () => {
      setIsApproving(true);
      const res = await beachbar.isApprovedForAll(address, mixologist.address);
      setIsApproved(res);
      setIsApproving(false);
    };

    const approve = async () => {
      setIsApproving(true);
      try {
        const res = await beachbar["setApprovalForAll(address,bool)"](
          mixologist.address,
          true
        );

        await res.wait();

        checkIsApproved();
      } catch (err: any) {
        // TODO: message user the error
        console.error(err.message);
      }
      setIsApproving(false);
    };

    useEffect(() => {
      updateBalance();
      checkIsApproved();
    }, []);

    return {
      balance,
      updateBalance,
      isMinting,
      isLoading,
      mint,
      approve,
      isAproving,
      isApproved,
    };
  };

  const useBeachbarContract = (address: string) => {
    const [assetBalance, setAssetBalance] = useState("");

    const getAssetInBeachbar = async () => {
      const assetId = await mixologist.assetId();
      const balance = await beachbar.balanceOf(address, assetId);
      setAssetBalance(parseBigBalance(balance));
    };

    const deposit = async ({ amount = 0 }) => {


      const assetId = await mixologist.assetId();
      const share = await beachbar.toShare(assetId, amount, false);

      try {
        const res = await beachbar[
          "deposit(uint256,address,address,uint256,uint256)"
        ](assetId, address, address, amount, share);

        await res.wait();
        getAssetInBeachbar();
      } catch (err: any) {
        console.error(err.message);
      }
    };

    useEffect(() => {
      getAssetInBeachbar();
    }, []);

    return { assetBalance, deposit };
  };

  const useMixologistContract = (address: string) => {
    const [depositedCollateral, setDepositedCollateral] = useState("0");

    const getDepositedCollateral = async () => {
      const balance = await mixologist.balanceOf(address);
      setDepositedCollateral(parseBigBalance(balance));
    };

    const lendAsset = async ({ amount = 0 }) => {
      const assetId = await mixologist.assetId();
      const share = await beachbar.toShare(assetId, amount, false);

      try {
        const res = await mixologist.addAsset(address, false, share);
        await res.wait();
        getDepositedCollateral();
      } catch (err: any) {
        console.error(err.message);
      }
    };

    useEffect(() => {
      getDepositedCollateral();
    }, []);

    return {
      lendAsset,
      depositedCollateral,
    };
  };

  return {
    useWethContract,
    useUsdcContract,
    useBeachbarContract,
    useMixologistContract,
  };
};
