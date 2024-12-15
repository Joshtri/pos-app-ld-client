import axios from 'axios';
import { Parfum } from '../types/parfum';
import { ApiResponse } from '../types/apiResponse';

const API_URL = 'http://localhost:5000/api/v1/parfum'; // Sesuaikan dengan backend Anda

// Mendapatkan semua parfum
// export const getAllParfum = async (): Promise<Parfum[]> => {
//   const response = await axios.get<Parfum[]>(API_URL);
//   return response.data;
// };
// Mendapatkan semua parfum
export const getAllParfum = async (): Promise<Parfum[]> => {
  try {
    console.log("[GET] Fetching all parfum...");
    // const response = await axios.get<Parfum[]>(API_URL);
    const response = await axios.get<ApiResponse<Parfum[]>>(API_URL);
    console.log("[GET] Response data:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("[GET] Error fetching all parfum:", (error as Error).message);
    throw new Error("Gagal mendapatkan data parfum");
  }
};

// Menambah parfum baru
export const addParfum = async (data: Omit<Parfum, 'id' | 'dibuatPada'>): Promise<Parfum> => {
  const response = await axios.post<Parfum>(API_URL, data);
  return response.data;
};

// Mengedit parfum
export const updateParfum = async (id: string, data: Partial<Omit<Parfum, 'id' | 'dibuatPada'>>): Promise<Parfum> => {
  const response = await axios.put<Parfum>(`${API_URL}/${id}`, data);
  return response.data;
};

// Menghapus parfum
export const deleteParfum = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
