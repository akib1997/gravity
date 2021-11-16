import React from "react";
import StatisticsBox from "./StatisticsBox";

const Statistics: React.FC = () => {
  const StatisticsData = [
    {
      id: 1,
      amount: 0.01,
      name: "GFI Price",
    },
    {
      id: 2,
      amount: 35,
      name: "TVL",
    },
    {
      id: 3,
      amount: 1,
      name: "Volume",
    },
  ];
  return (
    <>
      <div className="py-20">
        <h3 className="text-2xl sm:text-4xl font-bold mb-6 capitalize">
          Statistics
        </h3>
        <div className="grid gap-2 sm:grid-cols-3">
          {StatisticsData.map((statistic) => (
            <StatisticsBox key={statistic.id} {...statistic} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Statistics;
