import React, { useEffect, useState } from "react";
import { Parfum } from "../types/parfum";
import {
  getAllParfum,
  addParfum,
  updateParfum,
  deleteParfum,
} from "../services/parfumService";
import ParfumList from "../components/Parfum/ParfumList";
import ParfumModalForm from "../components/Parfum/ParfumForm";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Partials/Breadcrumbs";
import SearchBar from "../components/Partials/SearchBar";

const ParfumPage: React.FC = () => {
  const [parfumList, setParfumList] = useState<Parfum[]>([]);
  const [filteredParfumList, setFilteredParfumList] = useState<Parfum[]>([]);
  const [editingParfum, setEditingParfum] = useState<Parfum | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllParfum();
        setParfumList(data);
        setFilteredParfumList(data);
      } catch (error) {
        console.error("Error fetching parfum:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddParfum = async (data: Omit<Parfum, "id" | "dibuatPada">) => {
    try {
      const newParfum = await addParfum(data);
      setParfumList((prev) => [...prev, newParfum]);
      setFilteredParfumList((prev) => [...prev, newParfum]);
    } catch (error) {
      console.error("Gagal menambahkan parfum:", error);
    }
  };

  const handleUpdateParfum = async (
    id: string,
    data: Partial<Omit<Parfum, "id" | "dibuatPada">>
  ) => {
    try {
      // Proses update data ke server
      const updatedParfum = await updateParfum(id, data);
  
      // Perbarui state parfumList dan filteredParfumList
      setParfumList((prev) =>
        prev.map((parfum) => (parfum.id === id ? updatedParfum : parfum))
      );
      setFilteredParfumList((prev) =>
        prev.map((parfum) => (parfum.id === id ? updatedParfum : parfum))
      );
  
      // Tutup modal setelah sukses
      setIsModalOpen(false);
      setEditingParfum(null);
    } catch (error) {
      console.error("Gagal memperbarui parfum:", error);
      alert("Terjadi kesalahan saat memperbarui parfum. Silakan coba lagi.");
    }
  };
  
  

  const handleDeleteParfum = async (id: string) => {
    try {
      await deleteParfum(id);
      setParfumList((prev) => prev.filter((parfum) => parfum.id !== id));
      setFilteredParfumList((prev) => prev.filter((parfum) => parfum.id !== id));
    } catch (error) {
      console.error("Gagal menghapus parfum:", error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setFilteredParfumList(
        parfumList.filter((parfum) =>
          parfum.nama.toLowerCase().includes(query.toLowerCase().trim())
        )
      );
    } else {
      setFilteredParfumList(parfumList);
    }
  };

  

  const breadcrumbItems = [
    { label: "Dashboard", link: "/" },
    { label: "Kelola Parfum" },
  ];

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Kelola Parfum</h1>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setEditingParfum(null);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Tambah Parfum
          </button>
        </div>

        <SearchBar
          placeholder="Cari Parfum..."
          value={searchQuery}
          onChange={handleSearch}
        />

        <ParfumList
          parfumList={filteredParfumList}
          onEdit={(parfum) => {
            setIsModalOpen(true); // Buka modal
            setEditingParfum(parfum); // Set parfum yang sedang diedit
          }}
          onDelete={handleDeleteParfum}
        />


        <ParfumModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={
            editingParfum
              ? (data) => handleUpdateParfum(editingParfum.id, data)
              : handleAddParfum
          }
          initialData={editingParfum ? { nama: editingParfum.nama } : undefined}
        />
      </div>
    </Layout>
  );
};

export default ParfumPage;
