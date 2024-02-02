// SpiderChart.tsx
import React, { useEffect, useRef } from "react";
import Chart, {
  ChartOptions,
  ChartType,
  ChartTypeRegistry,
} from "chart.js/auto";

interface SpiderChartProps {
  data: number[];
  labels: string[];
}

const SpiderChart: React.FC<SpiderChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<
    keyof ChartTypeRegistry,
    number[],
    ChartOptions
  > | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Destroy existing Chart instance
        }
        chartInstance.current = new Chart(ctx, {
          type: "radar" as ChartType, // Explicitly specify the type as ChartType
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
                    size: 8, // Customize tick font size
                    family: "'Arial', sans-serif", // Customize tick font family
                    weight: "bold", // Customize tick font weight
                    color: "#ffffff", // Customize tick font color
                  },
                },
                grid: {
                  color: "#ffffff", // Customize grid line color
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 14, // Customize legend font size
                    family: "'Arial', sans-serif", // Customize legend font family
                    weight: "bold", // Customize legend font weight
                    color: "#ffffff", // Customize legend font color
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
    <div className="h-[60vw]  border">
      <canvas ref={chartRef} style={{ height: "100%" }} />
    </div>
  );
};

export default SpiderChart;
