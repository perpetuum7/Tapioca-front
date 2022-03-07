import { createContext, useState, ReactElement } from "react";

interface WalletProviderProps {
  children: ReactElement;
}

export interface WalletContextProps {
  wallet: {
    address?: string;
    balance: number;
  };
  connectWallet: () => void;
}

export const WalletContext = createContext({} as WalletContextProps);

export const WalletConsumer = WalletContext.Consumer;

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [wallet, setWallet] = useState({
    address: "",
    balance: 0,
  });

  const connectWallet = () => {
    const mockAddress = "0x0000000000000000000000000000000000000000";
    const mockBalance = 1.0005;

    setWallet({
      address: mockAddress,
      balance: mockBalance,
    });
  };

  return (
    <WalletContext.Provider
      value={{
        wallet,
        connectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
