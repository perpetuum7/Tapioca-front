import { ethers } from "ethers";
import { createContext, useState, ReactElement, useEffect } from "react";
import parseBigBalance from "@/utils/parseBigBalance";

interface WalletProviderProps {
  children: ReactElement;
}

export interface WalletContextProps {
  wallet: {
    address?: string;
    balance: string;
  };
  isConnected: boolean;
  isConnecting: boolean;
  metamaskNotAvailable: boolean;
  connectWallet: () => void;
}

export const WalletContext = createContext({} as WalletContextProps);

export const WalletConsumer = WalletContext.Consumer;

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(true);

  const winEthereum = (window as any).ethereum;
  const provider = winEthereum
    ? new ethers.providers.Web3Provider(winEthereum)
    : undefined;

  const [wallet, setWallet] = useState({
    address: "",
    balance: "0",
  });

  const connectWallet = async () => {
    if (!provider) return;
    setIsConnecting(true);

    await winEthereum.send("eth_requestAccounts");

    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);

    setWallet({
      address,
      balance: parseBigBalance(balance),
    });

    setIsConnecting(false);
    setIsConnected(true);
  };

  const checkConnection = async () => {
    if (!provider) return;
    const accounts = await provider.listAccounts();
    if (!accounts.length) {
      setIsConnecting(false);
      setIsConnected(false);
      return;
    }

    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);

    setWallet({
      address,
      balance: parseBigBalance(balance),
    });

    setIsConnecting(false);
    setIsConnected(true);
  };

  // TODO: when changes the accont on metamask trigger updates

  useEffect(() => {
    setIsConnecting(true);
    checkConnection();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        isConnected,
        isConnecting,
        metamaskNotAvailable: !winEthereum,
        connectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
