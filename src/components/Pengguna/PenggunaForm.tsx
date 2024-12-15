import React, { useState, useEffect } from "react";
import { Pengguna } from "../../types/pengguna";

interface PenggunaFormProps {
  isOpen: boolean; // Kontrol visibilitas modal
  onClose: () => void; // Fungsi untuk menutup modal
  onSubmit: (data: Omit<Pengguna, "id" | "dibuatPada">) => void; // Fungsi submit
  initialData?: Omit<Pengguna, "id" | "dibuatPada">; // Data awal untuk form
}

const PenggunaForm: React.FC<PenggunaFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [username, setUsername] = useState(initialData?.username || "");
  const [password, setPassword] = useState("");
  const [peran, setPeran] = useState(initialData?.peran || "");

  useEffect(() => {
    // Reset data saat modal dibuka atau initialData berubah
    if (isOpen) {
      setUsername(initialData?.username || "");
      setPassword("");
      setPeran(initialData?.peran || "");
    }
  }, [isOpen, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, password, peran });
    onClose(); // Tutup modal setelah submit
  };

  if (!isOpen) return null; // Jangan render modal jika tidak dibuka

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {initialData ? "Edit Pengguna" : "Tambah Pengguna"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Masukkan username"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Masukkan password"
              required
            />
          </div>

          {/* Peran */}
          <div className="mb-4">
            <label
              htmlFor="peran"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Peran
            </label>
            <select
              id="peran"
              value={peran}
              onChange={(e) => setPeran(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              required
            >
              <option value="" disabled>
                Pilih Peran
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default PenggunaForm;
