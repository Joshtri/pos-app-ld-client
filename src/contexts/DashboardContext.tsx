import React, { createContext, useState, useContext } from "react";

const DashboardContext = createContext(null);

export const DashboardProvider: React.FC = ({ children }) => {
  const [stats, setStats] = useState({ pengguna: 0, paket: 0, parfum: 0 });

  return (
    <DashboardContext.Provider value={{ stats, setStats }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
