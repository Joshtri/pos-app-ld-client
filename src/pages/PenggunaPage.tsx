import React, { useState, useEffect } from "react";
import PenggunaList from "../components/Pengguna/PenggunaList";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Partials/Breadcrumbs";
import PenggunaForm from "../components/Pengguna/PenggunaForm";
import { Pengguna } from "../types/pengguna";
import { getAllPengguna, addPengguna } from "../services/penggunaService";

const PenggunaPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [penggunaList, setPenggunaList] = useState<Pengguna[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const breadcrumbItems = [
    { label: "Dashboard", link: "/" },
    { label: "Kelola Pengguna" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllPengguna();
        setPenggunaList(data || []); // Tambahkan fallback array kosong
      } catch (err) {
        setError("Gagal memuat data pengguna. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddPengguna = async (data: Omit<Pengguna, "id" | "dibuatPada">) => {
    try {
      const newPengguna = await addPengguna(data);
      setPenggunaList((prev) => [...prev, newPengguna]);
    } catch (err) {
      console.error("Gagal menambahkan pengguna:", err);
    }
  };

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Heading */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Kelola Pengguna</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Tambah Pengguna
          </button>
        </div>

        <PenggunaList penggunaList={penggunaList} loading={loading} error={error} />

        {/* Form Tambah/Edit Pengguna */}
        <PenggunaForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddPengguna}
        />
      </div>
    </Layout>
  );
};

export default PenggunaPage;
