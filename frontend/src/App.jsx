import { useState } from "react";
import HomePage from "./pages/HomePage";
import CreateAccountTypePage from "./pages/CreateAccountTypePage";
import RegisterCustomerPage from "./pages/RegisterCustomerPage";
import RegisterEntrepreneurPage from "./pages/RegisterEntrepreneurPage";

function App() {
  const [page, setPage] = useState("home");

  if (page === "type") return <CreateAccountTypePage onSelect={setPage} />;
  if (page === "customer") return <RegisterCustomerPage />;
  if (page === "entrepreneur") return <RegisterEntrepreneurPage />;
  return <HomePage onCreateAccount={() => setPage("type")} />;
}

export default App;
