import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import "./PortfolioGraf.scss";
import { useNewCaseSelector } from "../helpers/useSelector";
ChartJS.register(ArcElement, Tooltip, Legend);

interface PortfolioGrafProps {}

const PortfolioGraf: React.FC<PortfolioGrafProps> = () => {
  const newCase = useNewCaseSelector();
  const data = {
    labels: newCase.map((elem) => elem.id),
    datasets: [
      {
        label: "$",
        data: newCase.map((elem) => elem.totalAmount),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <div className="portfolio-graf">
      <Pie data={data} />
    </div>
  );
};

export default PortfolioGraf;
