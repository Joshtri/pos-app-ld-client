import axios from 'axios';
import { Parfum } from '../types/parfum';
import { ApiResponse } from '../types/apiResponse';

const API_URL = `${import.meta.env.VITE_BASE_URL}/api/v1/parfum`; // Sesuaikan dengan backend Anda

// Mendapatkan semua parfum
// export const getAllParfum = async (): Promise<Parfum[]> => 
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
export const addParfum = async (data: Omit<Parfum, "id" | "dibuatPada">): Promise<Parfum> => {
  try {
    console.log("[POST] Adding new parfum...");
    const response = await axios.post<ApiResponse<Parfum>>(API_URL, data);
    console.log("[POST] Added parfum:", response.data);
    return response.data.data; // Ambil data parfum yang baru ditambahkan
  } catch (error) {
    console.error("[POST] Error adding parfum:", (error as Error).message);
    throw new Error("Gagal menambahkan parfum.");
  }
};


// Mengedit parfum berdasarkan ID
export const updateParfum = async (
  id: string,
  data: Partial<Omit<Parfum, "id" | "dibuatPada">>
): Promise<Parfum> => {
  try {
    console.log(`[PUT] Updating parfum with ID: ${id}...`);
    const response = await axios.patch<ApiResponse<Parfum>>(`${API_URL}/${id}`, data);
    console.log("[PUT] Updated parfum:", response.data);
    return response.data.data; // Ambil data parfum yang diperbarui
  } catch (error) {
    console.error(`[PUT] Error updating parfum with ID: ${id}`, (error as Error).message);
    throw new Error("Gagal memperbarui parfum.");
  }
};


// Menghapus parfum berdasarkan ID
export const deleteParfum = async (id: string): Promise<void> => {
  try {
    console.log(`[DELETE] Deleting parfum with ID: ${id}...`);
    await axios.delete<ApiResponse<null>>(`${API_URL}/${id}`);
    console.log("[DELETE] Parfum deleted successfully.");
  } catch (error) {
    console.error(`[DELETE] Error deleting parfum with ID: ${id}`, (error as Error).message);
    throw new Error("Gagal menghapus parfum.");
  }
};
