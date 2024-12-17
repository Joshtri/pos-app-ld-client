import React from "react";

interface SummaryTableRow {
  kategori: string;
  jumlah: number;
}

const SummaryTable: React.FC = () => {
  const summaryData: SummaryTableRow[] = [
    { kategori: "Pengguna", jumlah: 120 },
    { kategori: "Paket", jumlah: 45 },
    { kategori: "Parfum", jumlah: 30 },
    { kategori: "Transaksi", jumlah: 89 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Ringkasan Data</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Kategori</th>
            <th className="p-2">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {summaryData.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-2">{row.kategori}</td>
              <td className="p-2">{row.jumlah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
