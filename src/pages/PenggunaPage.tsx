import React from "react";
import PenggunaList from "../components/Pengguna/PenggunaList";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Partials/Breadcrumbs";

const PenggunaPage: React.FC = () => {



  const breadcrumbItems = [
    { label: "Dashboard", link: "/" },
    { label: "Kelola Pengguna" },
  ];


  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Breadcrumbs items={breadcrumbItems}/>

                {/* Page Heading */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Kelola Pengguna</h1>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setEditingParfum(null);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Tambah Pengguna
            </button>
         
        </div>

        <PenggunaList />
      </div>
    </Layout>
  );
};

export default PenggunaPage;
