import { useState } from "react";
import CreateAccountTypePage from "./pages/CreateAccountTypePage";
import RegisterCustomerPage from "./pages/RegisterCustomerPage";
import RegisterEntrepreneurPage from "./pages/RegisterEntrepreneurPage";

function App() {
  const [page, setPage] = useState("type");

  if (page === "customer") return <RegisterCustomerPage />;
  if (page === "entrepreneur") return <RegisterEntrepreneurPage />;
  return <CreateAccountTypePage onSelect={setPage} />;
}

export default App;
