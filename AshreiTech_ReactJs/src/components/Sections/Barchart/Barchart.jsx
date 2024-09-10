import React, { useEffect, useRef, useState } from 'react';
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
  labels: ['January', 'February', 'March', 'April',],
  datasets: [
    {
      label: 'SAP',
      data: [81, 56, 55, 40],
      backgroundColor: 'rgba(244, 165, 45)',

    },
    {
      label: 'Saleforce',
      data: [ 19, 86, 27, 90],
      backgroundColor: 'rgba(208, 181, 42)',

    },
    {
      label: 'Tableau',
      data: [ 50, 90, 65, 80], 
      backgroundColor: 'rgba(85, 185, 159)',

    },
  ],
};
const verticalTitlePlugin = {
  id: 'verticalTitlePlugin',
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const { width, height } = chart;

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
        generateLabels: function (chart) {
          const original = ChartJS.defaults.plugins.legend.labels.generateLabels;
          const labelsOriginal = original.call(this, chart);

          labelsOriginal.forEach(label => {
            label.borderRadius = 10; 
          });

          return labelsOriginal;
        },
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
        display: true,
        color: 'red',
        width: 200,
      },
      ticks: {
        display: false, 
      },
      grid: {
        display: false,
        borderColor: 'rgba(97,102,105,255)', 
        borderWidth: 10, 
      offset: true,
      position: 'bottom', 
   
    },
    barPercentage: 0.1, 
    categoryPercentage: 0.1,
  },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        borderDash: [10, 5],
        borderColor: 'rgba(0, 0, 0, 0)',
      },
      border: {
        display: false,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 10,
      barThickness: 10, 
      maxBarThickness: 20, 
    },
  },
};

export const Barchart = (props) => {
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
          <div style={{background:"white",marginLeft:102}} className="col-lg-9 ">
            <Bar
              data={props?.data}
              options={options}
              ref={chartRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};
