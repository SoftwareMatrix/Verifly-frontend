import { Routes, Route, Navigate } from "react-router-dom";
import CreateAccountTypePage from "./pages/CreateAccountTypePage";
import RegisterCustomerPage from "./pages/RegisterCustomerPage";
import RegisterEntrepreneurPage from "./pages/RegisterEntrepreneurPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<CreateAccountTypePage />} />
      <Route path="/register/customer" element={<RegisterCustomerPage />} />
      <Route path="/register/business" element={<RegisterEntrepreneurPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
