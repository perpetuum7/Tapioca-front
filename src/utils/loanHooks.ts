import { ethers } from "ethers";
import parseBigBalance from "@/utils/parseBigBalance";
import { loadContract__TEST } from "tapioca-sdk";
import { useEffect, useState } from "react";

const winEthereum = (window as any).ethereum;
const provider = new ethers.providers.Web3Provider(winEthereum);
const signer = provider.getSigner();

const { mixologist, beachbar, usdc, weth } = loadContract__TEST(signer);

export const useWethContract = (address: string) => {
  const [isLoading, setIsLoading] = useState(true);
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
    // TODO: if error or cancel setIsMiting false
    setIsMiting(true);
    const mintValue = ethers.BigNumber.from((1e18).toString()).mul(amount);
    const mint = await weth.freeMint(mintValue);
    await mint.wait();
    updateBalance();
    setIsMiting(false);
  };

  const approve = async () => {};

  const deposit = async ({ amount = 0 }) => {
    const lendValue = ethers.BigNumber.from((1e18).toString()).mul(amount);
  };

  useEffect(() => {
    updateBalance();
  }, []);

  return {
    balance,
    updateBalance,
    isLoading,
    isMinting,
    mint,
    approve,
    deposit,
  };
};

export const useUsdcContract = (address: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMinting, setIsMiting] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [balance, setBalance] = useState("0");

  const updateBalance = async () => {
    setIsLoading(true);
    const balance = await usdc.balanceOf(address);
    setBalance(parseBigBalance(balance));
    setIsLoading(false);
  };

  const mint = async ({ amount = 1 }) => {
    // TODO: if error or cancel setIsMiting false
    setIsMiting(true);
    const mintValue = ethers.BigNumber.from((1e18).toString()).mul(amount);
    const mint = await usdc.freeMint(mintValue);
    await mint.wait();
    updateBalance();
    setIsMiting(false);
  };

  const approve = async () => {};

  const deposit = async ({ amount = 0 }) => {};

  useEffect(() => {
    updateBalance();
  }, []);

  return {
    balance,
    updateBalance,
    isMinting,
    isLoading,
    mint,
    approve,
    deposit,
  };
};

export const useBeachbarContract = (address: string) => {
  const [assetBalance, setAssetBalance] = useState("");

  const getAssetInBeachbar = async () => {
    const assetId = await mixologist.assetId();
    const balance = await beachbar.balanceOf(address, assetId);
    setAssetBalance(parseBigBalance(balance));
  };

  useEffect(() => {
    getAssetInBeachbar();
  }, []);

  return { assetBalance };
};
