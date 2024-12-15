import React, { useEffect, useState } from "react";
import { Pengguna } from "../../types/pengguna";
import { getAllPengguna } from "../../services/penggunaService";

interface PenggunaListProps {}

const PenggunaList: React.FC<PenggunaListProps> = () => {
  const [penggunaList, setPenggunaList] = useState<Pengguna[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPengguna = async () => {
      try {
        setLoading(true);
        const data = await getAllPengguna();
        console.log("data yang diperoleh dari serviceParfum : ", data);
        setPenggunaList(data);
      } catch (error) {
        console.error("Error fetching parfum:", error);
        setError("Gagal memuat data parfum. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    fetchPengguna();
  }, []);

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <p className="text-center text-gray-500">Memuat data pengguna...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <table className="table-auto w-full text-left text-gray-600 bg-white shadow-md rounded-lg">
            <thead className="bg-blue-500 text-white">
            <tr>
                <th className="px-6 py-3">Nama Pengguna</th>
                <th className="px-6 py-3">Aksi</th>
            </tr>
            </thead>
            

        </table>
      )}
    </div>
  );
};

export default PenggunaList;
