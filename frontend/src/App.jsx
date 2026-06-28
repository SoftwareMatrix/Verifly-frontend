import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListYourBusinessPage from "./pages/ListYourBusinessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListYourBusinessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
