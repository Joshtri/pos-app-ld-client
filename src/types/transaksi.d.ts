export interface Transaksi {
    id: string; // ID transaksi
    pelanggan: string; // Nama pelanggan
    layanan: string; // Jenis layanan (contoh: "Laundry" atau "Dry Cleaning")
    paket: string; // Paket layanan (contoh: "Reguler" atau "Kilat")
    parfum: string; // Jenis parfum yang dipilih
    berat: number; // Berat pakaian dalam kg
    totalHarga: number; // Total harga transaksi
    tanggalMasuk: string; // Tanggal masuk transaksi
    tanggalSelesai: string; // Tanggal selesai transaksi
  }
  