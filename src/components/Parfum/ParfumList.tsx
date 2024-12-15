import React from "react";
import { Parfum } from "../../types/parfum";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface ParfumListProps {
  parfumList: Parfum[]; // Data parfum diterima dari props
  onEdit: (parfum: Parfum) => void;
  onDelete: (id: string) => void;
}

const ParfumList: React.FC<ParfumListProps> = ({
  parfumList,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      {parfumList.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada parfum tersedia.</p>
      ) : (
        <table className="table-auto w-full text-left text-gray-600 bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3">Nama Parfum</th>
              <th className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {parfumList.map((parfum) => (
              <tr key={parfum.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{parfum.nama}</td>
                <td className="px-6 py-4 flex space-x-4">
                  <button
                    onClick={() => onEdit(parfum)}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <PencilIcon className="w-5 h-5 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(parfum.id)}
                    className="text-red-600 hover:text-red-800 flex items-center"
                  >
                    <TrashIcon className="w-5 h-5 mr-1" />
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ParfumList;
