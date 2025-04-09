import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const ProjectionVsActual = () => {
  const data = {
    labels: ['TOTAL'],
    datasets: [
      {
        label: 'Live Projected',
        data: [440],
        backgroundColor: 'rgba(255,159,64,0.6)',
        borderColor: 'rgba(255,159,64,1)',
        borderWidth: 1,
      },
      {
        label: 'Actual',
        data: [344],
        backgroundColor: 'rgba(153,102,255,0.6)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
      },
      {
        label: 'Difference',
        data: [-96],
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'bar'>) => `${tooltipItem.raw} GBP`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (tickValue: string | number) => `${Number(tickValue)} GBP`,
        },
      },
    },
  };

  return (
    <section
      style={{
        border: '0.1rem solid black',
        borderRadius: '5%',
        padding: '0.5rem',
      }}
    >
      <h2>Income Breakdown</h2>
      <Bar data={data} options={options} />
    </section>
  );
};

export default ProjectionVsActual;
