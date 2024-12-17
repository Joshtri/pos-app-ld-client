import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashboardCard from "../components/Dashboard/DashboardCard";
import DashboardChart from "../components/Dashboard/DashboardChart";
import SummaryTable from "../components/Dashboard/SummaryTable";
import Breadcrumbs from "../components/Partials/Breadcrumbs";

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    pengguna: 0,
    paket: 0,
    parfum: 0,
    transaksi: 0,
  });

  useEffect(() => {
    // Simulasi pengambilan data dari API
    const fetchStats = () => {
      const data = {
        pengguna: 120,
        paket: 45,
        parfum: 30,
        transaksi: 89,
      };
      setStats(data);
    };
    fetchStats();
  }, []);

  const breadcrumbItems = [{ label: "Dashboard", link: "/" }];

  return (
    <Layout>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Ringkasan Data */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
          <DashboardCard title="Pengguna" count={stats.pengguna} />
          <DashboardCard title="Paket" count={stats.paket} />
          <DashboardCard title="Parfum" count={stats.parfum} />
          <DashboardCard title="Transaksi" count={stats.transaksi} />
        </div>

        {/* Grafik */}
        <div className="my-6">
          <DashboardChart />
        </div>

        {/* Tabel Ringkasan */}
        <div className="my-6">
          <SummaryTable />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
