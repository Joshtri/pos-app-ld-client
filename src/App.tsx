// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ParfumPage from "./pages/ParfumPage";
import LoginPage from "./pages/LoginPage";
import TransaksiPage from "./pages/TransaksiPage";
import PenggunaPage from "./pages/PenggunaPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/parfum" element={<ParfumPage />} /> {/* Halaman parfum */}
        <Route path="/transaksi" element={<TransaksiPage />} />
        <Route path="/pengguna" element={<PenggunaPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
