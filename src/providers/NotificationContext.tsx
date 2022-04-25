import {
  createContext,
  useState,
  ReactElement,
  useEffect,
  useMemo,
} from "react";

interface NotificationProviderProps {
  children: ReactElement;
}

export interface NotificationContextProps {
  useNotification: (message: string) => void;
  Notification: JSX.Element | null;
}

export const NotificationContext = createContext(
  {} as NotificationContextProps
);

export const NotificationConsumer = NotificationContext.Consumer;

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const clear = () => {
    setVisible(false);
    setMessage("");
  };

  useEffect(() => {
    if (visible) setTimeout(clear, 4000);
  }, [visible]);

  const useNotification = (message: string) => {
    setVisible(true);
    setMessage(message);
  };

  const Notification = useMemo(() => {
    if (!visible || !message) return null;
    return (
      <div className="absolute z-[99999] top-3 left-3 max-w-md">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 p-2 rounded flex items-center">
          <div className="font-bold overflow-x-auto">
            {message.split(";")[0]}
          </div>
          <button className="ml-4" onClick={clear}>
            X
          </button>
        </div>
      </div>
    );
  }, [visible, message]);

  return (
    <NotificationContext.Provider value={{ useNotification, Notification }}>
      {Notification}
      {children}
    </NotificationContext.Provider>
  );
};
