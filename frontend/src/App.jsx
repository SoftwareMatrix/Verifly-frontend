import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateAccountTypePage from "./pages/CreateAccountTypePage";
import RegisterCustomerPage from "./pages/RegisterCustomerPage";
import RegisterEntrepreneurPage from "./pages/RegisterEntrepreneurPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<CreateAccountTypePage />} />
        <Route path="/register/customer" element={<RegisterCustomerPage />} />
        <Route path="/register/entrepreneur" element={<RegisterEntrepreneurPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
