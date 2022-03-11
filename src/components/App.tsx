import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { WalletProvider } from "@/wallet/WalletContext";
import Header from "@/components/Header";
import Borrow from "@/components/pages/Borrow";

const App = () => {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="lg:container flex flex-col md:py-6 md:px-4 py-2 w-full">
          <Header />

          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="borrow" element={<Borrow />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </WalletProvider>
  );
};

export default App;
