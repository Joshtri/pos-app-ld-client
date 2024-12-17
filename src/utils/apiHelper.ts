// apiHelper.ts
export const handleApiResponse = <T>(response: any): T => {
  if (response.status === 200 || response.status === 201) {
    return response.data;
  }
  throw new Error("API Error: " + response.message);
};

export const handleApiError = (error: any): string => {
  if (error.response && error.response.data) {
    return error.response.data.message || "Terjadi kesalahan pada server.";
  }
  return "Koneksi gagal. Silakan coba lagi.";
};
