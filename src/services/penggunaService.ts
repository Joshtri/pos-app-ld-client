import axios from "axios";
import { Pengguna } from "../types/pengguna";
import { ApiResponse } from "../types/apiResponse";

const API_URL = `${import.meta.env.VITE_BASE_URL}/api/v1/pengguna`;



export const getAllPengguna = async (): Promise<Pengguna[]> => {
    try {
        console.log("[GET] Fetching all pengguna...");
        const response = await  axios.get<ApiResponse<Pengguna[]>>(API_URL);
        console.log("[GET] Response data:", response.data);
        return response.data.data;

    } catch (error) {
        console.error("[GET] Error fetching all pengguna:", (error as Error).message);
        throw new Error("Gagal mendapatkan data pengguna");
    }   
}


// Menambah pengguna baru
export const addPengguna = async (data: Omit<Pengguna, 'id' | 'dibuatPada'>): Promise<Pengguna> => {
    const response = await axios.post<Pengguna>(API_URL, data);
    return response.data;
};
  


// Mengedit pengguna
export const updatePengguna = async (id: string, data: Partial<Omit<Pengguna, 'id' | 'dibuatPada'>>): Promise<Pengguna> => {
    const response = await axios.put<Pengguna>(`${API_URL}/${id}`, data);
    return response.data;
};

// Menghapus parfum
export const deletePengguna = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  };
  