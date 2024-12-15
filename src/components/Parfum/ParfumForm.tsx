import React, { useState, useEffect } from 'react';
import { Parfum } from '../../types/parfum';

interface ParfumModalFormProps {
  isOpen: boolean; // Kontrol visibilitas modal
  onClose: () => void; // Fungsi untuk menutup modal
  onSubmit: (data: Omit<Parfum, 'id' | 'dibuatPada'>) => void; // Fungsi submit
  initialData?: Omit<Parfum, 'id' | 'dibuatPada'>; // Data awal untuk form
}

const ParfumModalForm: React.FC<ParfumModalFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [nama, setNama] = useState(initialData?.nama || '');

  useEffect(() => {
    // Reset nama saat modal dibuka atau data awal berubah
    if (isOpen) {
      setNama(initialData?.nama || '');
    }
  }, [isOpen, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nama });
    onClose(); // Tutup modal setelah submit
  };

  if (!isOpen) return null; // Jangan render modal jika isOpen false

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {initialData ? 'Edit Parfum' : 'Tambah Parfum'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="namaParfum"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Parfum
            </label>
            <input
              type="text"
              id="namaParfum"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-700"
              placeholder="Masukkan nama parfum"
              required
            />
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

export default ParfumModalForm;
