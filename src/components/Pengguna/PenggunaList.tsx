import React from "react";
import { Pengguna } from "../../types/pengguna";

interface PenggunaListProps {
  penggunaList?: Pengguna[]; // Buat props opsional
  loading: boolean;
  error: string | null;
}

const PenggunaList: React.FC<PenggunaListProps> = ({
  penggunaList = [], // Set nilai default menjadi array kosong
  loading,
  error,
}) => {
  if (loading) {
    return <p className="text-center text-gray-500">Memuat data pengguna...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left text-gray-600 bg-white shadow-md rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3">Username</th>
            <th className="px-6 py-3">Peran</th>
            <th className="px-6 py-3">Dibuat Pada</th>
          </tr>
        </thead>
        <tbody>
          {penggunaList.length > 0 ? (
            penggunaList.map((pengguna) => (
              <tr key={pengguna.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{pengguna.username}</td>
                <td className="px-6 py-4">{pengguna.peran}</td>
                <td className="px-6 py-4">
                    {new Date(pengguna.dibuatPada).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center px-6 py-4 text-gray-500">
                Tidak ada pengguna tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PenggunaList;
