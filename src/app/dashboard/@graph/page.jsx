"use client";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const Graph = () => {
  Chart.register(PointElement, LineElement, CategoryScale, LinearScale);

  return (
    <div>
      <text className="text-xl font-bold">Active Summary</text>
      <Line
        data={{
          labels: ["Jan", "feb", "march", "april", "may", "june", "july"],
          datasets: [
            {
              label: "revenue",
              data: [100, 75, 110, 90, 65, 45, 10],
              backgroundColor: "rgba(255, 99, 132, 1.5)",
              borderColor: "rgba(255, 99, 132, 1.5)",
              tension: 0.4,
              pointRadius: 0,
            },
            {
              label: "Expenses",
              data: [65, 45, 10, 100, 75, 110, 90],
              backgroundColor: "rgba(53, 162, 235,1.0)",
              borderColor: "rgba(53, 162, 235,1.0)",
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            title: "GRaph",
          },
        }}
      />
    </div>
  );
};

export default Graph;
