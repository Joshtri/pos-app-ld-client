import React, { useEffect, useState } from "react";
import { Parfum } from "../../types/parfum";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { getAllParfum, deleteParfum } from "../../services/parfumService";

interface ParfumListProps {
  onEdit: (parfum: Parfum) => void;
  onDelete: (id: string) => void;
}

const ParfumList: React.FC<ParfumListProps> = ({ onEdit, onDelete }) => {
  const [parfumList, setParfumList] = useState<Parfum[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data parfum
  useEffect(() => {
    const fetchParfum = async () => {
      try {
        setLoading(true);
        const data = await getAllParfum();
        console.log('data yang diperoleh dari serviceParfum : ',data );
        setParfumList(data);
      } catch (err) {
        console.error("Error fetching parfum:", err);
        setError("Gagal memuat data parfum. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchParfum();
  }, []);

  // Handle delete parfum
  const handleDeleteParfum = async (id: string) => {
    try {
      await deleteParfum(id);
      setParfumList((prev) => prev.filter((parfum) => parfum.id !== id)); // Perbarui state
      onDelete(id); // Panggil callback onDelete
    } catch (err) {
      console.error("Error deleting parfum:", err);
      alert("Gagal menghapus parfum. Silakan coba lagi.");
    }
  };

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <p className="text-center text-gray-500">Memuat data parfum...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <table className="table-auto w-full text-left text-gray-600 bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3">Nama Parfum</th>
              <th className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {parfumList.length > 0 ? (
              parfumList.map((parfum) => (
                <tr key={parfum.id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4">{parfum.nama}</td>
                  <td className="px-6 py-4 flex space-x-4">
                    <button
                      onClick={() => onEdit(parfum)}
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <PencilIcon className="w-5 h-5 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteParfum(parfum.id)}
                      className="text-red-600 hover:text-red-800 flex items-center"
                    >
                      <TrashIcon className="w-5 h-5 mr-1" />
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  className="text-center px-6 py-4 text-gray-500"
                >
                  Tidak ada parfum tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ParfumList;
