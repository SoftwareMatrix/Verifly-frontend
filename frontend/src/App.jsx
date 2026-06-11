import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#121212", color: "#fff" }}
    >
      <Navbar />
      <main style={{ padding: "32px" }}>
        <h1>მთავარი კონტენტი</h1>
      </main>
    </div>
  );
}

export default App;
