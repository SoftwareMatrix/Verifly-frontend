import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateAccountTypePage from "./pages/CreateAccountTypePage";
import RegisterCustomerPage from "./pages/RegisterCustomerPage";
import RegisterEntrepreneurPage from "./pages/RegisterEntrepreneurPage";
import SignInPage from "./pages/SignInPage";
import ListYourBusinessPage from "./pages/ListYourBusinessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<CreateAccountTypePage />} />
        <Route path="/register/customer" element={<RegisterCustomerPage />} />
        <Route path="/register/business" element={<RegisterEntrepreneurPage />} />
        <Route path="/register/entrepreneur" element={<Navigate to="/register/business" replace />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/list-your-business" element={<ListYourBusinessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
