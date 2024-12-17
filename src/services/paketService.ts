import axios from "axios";
import { Paket } from "../types/paket";
import { ApiResponse } from "../types/apiResponse";

const API_URL = `${import.meta.env.VITE_BASE_URL}/api/v1/paket`;


export const getAllPaket = async () : Promise<Paket[]> =>{
    try {
        console.log("[GET] Fetching all Paket...");
        // const response = await axios.get<Paket[]>(API_URL);
        const response = await axios.get<ApiResponse<Paket[]>>(API_URL);
        console.log("[GET] Response data:", response.data);
        return response.data.data;
    } catch (error) {
        console.error("[GET] Error fetching all Paket:", (error as Error).message);
        throw new Error("Gagal mendapatkan data Paket");
    }
};