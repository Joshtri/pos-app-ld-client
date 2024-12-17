import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          POS Laundry Dolphin
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-lg transition"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/parfum"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-lg transition"
            >
              Kelola Parfum
            </Link>
          </li>
          <li>
            <Link
              to="/transaksi"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-lg transition"
            >
              Transaksi
            </Link>
          </li>
          <li>
            <Link
              to="/pengguna"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-lg transition"
            >
              Pengguna
            </Link>
          </li>
          <li>
            <Link
              to="/paket"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-lg transition"
            >
              Paket
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
