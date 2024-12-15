import React, { useEffect, useState } from 'react';
import { Parfum } from '../types/parfum';
import {
  getAllParfum,
  addParfum,
  updateParfum,
  deleteParfum,
} from '../services/parfumService';
import ParfumList from '../components/Parfum/ParfumList';
import ParfumModalForm from '../components/Parfum/ParfumForm';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Partials/Breadcrumbs';
import SearchBar from '../components/Partials/SearchBar';

const ParfumPage: React.FC = () => {
  const [parfumList, setParfumList] = useState<Parfum[]>([]);
  const [filteredParfumList, setFilteredParfumList] = useState<Parfum[]>([]);
  const [editingParfum, setEditingParfum] = useState<Parfum | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data parfum
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllParfum();
        console.log('Data parfum berhasil dimuat:', data); // Debug data API
        setParfumList(data);
        setFilteredParfumList(data);
      } catch (error) {
        console.error('Error fetching parfum:', error); // Debug error
      }
    };

    fetchData();
  }, []);

  // Tambah parfum
  const handleAddParfum = async (data: Omit<Parfum, 'id' | 'dibuatPada'>) => {
    const newParfum = await addParfum(data);
    setParfumList((prev) => [...prev, newParfum]);
    setFilteredParfumList((prev) => [...prev, newParfum]);
  };

  // Edit parfum
  const handleUpdateParfum = async (
    id: string,
    data: Partial<Omit<Parfum, 'id' | 'dibuatPada'>>
  ) => {
    const updatedParfum = await updateParfum(id, data);
    setParfumList((prev) =>
      prev.map((parfum) => (parfum.id === id ? updatedParfum : parfum))
    );
    setFilteredParfumList((prev) =>
      prev.map((parfum) => (parfum.id === id ? updatedParfum : parfum))
    );
  };

  // Hapus parfum
  const handleDeleteParfum = async (id: string) => {
    await deleteParfum(id);
    setParfumList((prev) => prev.filter((parfum) => parfum.id !== id));
    setFilteredParfumList((prev) => prev.filter((parfum) => parfum.id !== id));
  };

  // Pencarian data
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = parfumList.filter((parfum) =>
        parfum.nama.toLowerCase().includes(query.toLowerCase().trim())
      );
      console.log('Hasil filter:', filtered); // Debug hasil filter
      setFilteredParfumList(filtered);
    } else {
      setFilteredParfumList(parfumList);
    }
  };

  const breadcrumbItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Kelola Parfum' },
  ];

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Heading */}
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

        {/* Search Bar */}
        <SearchBar
          placeholder="Cari Parfum..."
          value={searchQuery}
          onChange={handleSearch}
        />

        {/* Parfum List */}
        <ParfumList
          parfumList={filteredParfumList}
          onEdit={(parfum) => {
            setIsModalOpen(true);
            setEditingParfum(parfum);
          }}
          onDelete={handleDeleteParfum}
        />

        {/* Modal Form */}
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
