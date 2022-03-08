import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { WalletProvider } from "@/wallet/WalletContext";
import Header from "@/components/Header";

const App = () => {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="app">
          <Header />

          <Routes>
            <Route path="/" element={<Outlet />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </WalletProvider>
  );
};

export default App;
