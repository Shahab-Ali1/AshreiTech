import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  DataLabelsPlugin
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'SAP',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(244, 165, 45)',

    },
    {
      label: 'Saleforce',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(208, 181, 42)',

    },
    {
      label: 'Tableau',
      data: [40, 60, 70, 50, 90, 65, 80], 
      backgroundColor: 'rgba(85, 185, 159)',

    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      top: 20,
      labels: {
        boxWidth: 30,
        boxHeight: 30,
        padding: 15,
      },
    },
    title: {
      position: 'right',
      align: 'end',
      display: false,
      text: 'Key',
      position: 'top',
      padding: {
        top: 10,
      },

      font: {
        size: 18, 
      },
    },
    datalabels: {
      display: true,
      color: '#ffffff',
      anchor: 'end',
      align: 'end',
      // formatter: (value, context) => {
      //   // Calculate the percentage
      //   const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
      //   const percentage = ((value / total) * 100).toFixed(2);
      //   return `${percentage}%`;
      // },
      formatter: (value) => `${value}%`,
      offset: -30,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      border: {
        color: 'red',
        width: 20,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        borderDash: [10, 5],
        borderColor: 'rgba(0, 0, 0, 0)',
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
};

export const Barchart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container-fluid " >
        <div className="row justify-content-center">
          <div style={{background:"white"}} className="col-lg-9 ">
            <Bar
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    </>
  );
};
