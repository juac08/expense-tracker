import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import {useGlobalContext} from './context'
import { motion} from "framer-motion";

const Chart = () => {
  const { income, expense } = useGlobalContext();

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Income vs Expense',
        data: [income, Math.abs(expense)],
        backgroundColor: [
          'rgba(14, 165, 233, 0.85)',
          'rgba(248, 113, 113, 0.9)'
        ],
        borderColor: '#f8fafc',
        borderWidth: 2
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: 'Income vs Expense',
      fontColor: '#0f172a'
    },
    legend: {
      labels: {
        fontColor: '#0f172a',
        usePointStyle: true
      }
    },
    cutoutPercentage: 60
  };

  return (
    <motion.div
      className="chart-card"
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 360,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <Doughnut className='chart' data={data} options={options} />
    </motion.div>
  );
};

export default Chart
