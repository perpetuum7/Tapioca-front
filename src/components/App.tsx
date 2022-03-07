import { Route, Routes, BrowserRouter } from "react-router-dom";
import { WalletProvider } from "@/wallet/WalletContext";

const App = () => {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/"></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </WalletProvider>
  );
};

export default App;
