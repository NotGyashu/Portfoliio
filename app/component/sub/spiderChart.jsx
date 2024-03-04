// SpiderChart.jsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  RadarController,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart elements and controllers
Chart.register(
  RadarController,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SpiderChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Destroy existing Chart instance
        }

        chartInstance.current = new Chart(ctx, {
          type: "radar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Skills",
                data: data,
                backgroundColor: "rgba(50, 29, 69, 0.2)",
                borderColor: "rgba(18, 17, 17, 1)",
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              r: {
                min: 0,
                max: 100,
                ticks: {
                  stepSize: 20,
                  font: {
                    size: 12,
                    family: "'Arial', sans-serif",
                    weight: "bold",
                    color: "#ffffff",
                  },
                },
                grid: {
                  color: "#ffffff",
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 44,
                    family: "'Arial', sans-serif",
                    weight: "bold",
                    color: "#ffffff",
                  },
                },
              },
            },
          },
        });
      }
    }
  }, [data, labels]);

  return (
    <div className="h-[60vw] border">
      <canvas ref={chartRef} style={{ height: "100%" }} />
    </div>
  );
};

export default SpiderChart;
