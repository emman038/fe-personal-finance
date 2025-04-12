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
import { GraphContent } from 'src/index.config';

import { GraphContainer, GraphTitle } from '../../index.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const ProjectionVsActual = ({
  graphContent,
}: {
  graphContent: GraphContent;
}) => {
  const { graphTitle, graphLabels } = graphContent;

  const data = {
    labels: [...graphLabels],
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

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
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
        grid: {
          color: (context) =>
            context.tick.value === 0 ? 'black' : 'rgba(0,0,0,0.1)',
        },
      },
    },
  };

  return (
    <GraphContainer>
      <GraphTitle>{graphTitle}</GraphTitle>
      <Bar data={data} options={options} />
    </GraphContainer>
  );
};

export default ProjectionVsActual;
