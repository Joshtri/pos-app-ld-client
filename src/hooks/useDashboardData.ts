import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";

const useDashboardData = () => {
  const [stats, setStats] = useState({ pengguna: 0, paket: 0, parfum: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };
    fetchStats();
  }, []);

  return stats;
};

export default useDashboardData;
