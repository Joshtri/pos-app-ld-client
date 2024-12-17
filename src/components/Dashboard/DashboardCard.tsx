import React from "react";

interface DashboardCardProps {
  title: string;
  count: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{count}</p>
    </div>
  );
};

export default DashboardCard;
