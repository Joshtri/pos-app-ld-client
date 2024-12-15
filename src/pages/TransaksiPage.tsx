import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Partials/Breadcrumbs'
import SearchBar from '../components/Partials/SearchBar'
import { Parfum } from '../types/parfum'
import { Transaksi } from '../types/transaksi'

const TransaksiPage: React.FC = () => {
  const [transaksiList, setTransaksiList]= useState<Transaksi[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingParfum, setEditingParfum] = useState<Parfum | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const breadcrumbItems = [
    {label: "Dashboard", link :'/dashboard'},
    {label: "Kelola Transaksi"}
  ]

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

    // Fetch data parfum
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllParfum();
        console.log('Data transaksi berhasil dimuat:', data); // Debug data API
        setTransaksiList(data);
        setFilteredParfumList(data);
      } catch (error) {
        console.error('Error fetching parfum:', error); // Debug error
      }
    };

    fetchData();
  }, []);

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


  return (
    <Layout>
        <div className="bg-white shadow-lg rounded-lg p-6">
            <Breadcrumbs items={breadcrumbItems}/>
            {/* Page Heading */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Kelola Transaki</h1>

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
            
        </div>
    </Layout>
  )
}

export default TransaksiPage