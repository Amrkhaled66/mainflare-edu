import {
    ArcElement,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    Tooltip,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  import React from 'react';
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  type ChartSegment = {
    label: string;
    value: number;
    color: string;
  };
  
  type DoughnutChartProps = {
    segments: ChartSegment[];
    centerContent?: React.ReactNode;
  };
  
  const DoughnutChart = ({ segments, centerContent }: DoughnutChartProps) => {
    const data = {
      labels: segments.map((s) => s.label),
      datasets: [
        {
          data: segments.map((s) => s.value),
          backgroundColor: segments.map((s) => s.color),
          borderWidth: 0,
        },
      ],
    };
  
    const options: ChartOptions<'doughnut'> = {
      cutout: '70%',
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          callbacks: {
            label: (context) => {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}%`;
            },
          },
        },
      },
      maintainAspectRatio: false,
    };
  
    return (
      <div className="relative h-40 w-40">
        <Doughnut
          data={data}
          options={options}
          className="bg-white rounded-full overflow-visible"
        />
  
        {centerContent && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {centerContent}
          </div>
        )}
      </div>
    );
  };
  
  export default DoughnutChart;
  