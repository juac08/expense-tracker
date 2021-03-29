import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import {useGlobalContext} from './context'
import { motion} from "framer-motion";

const Chart=()=> {
    const {history} = useGlobalContext();
 const  y= history.map(transaction => transaction.amount);
 const  x= history.map(transaction => transaction.title);

        const data = {
        labels: x,
        datasets: [
            {
            label: 'Expense History',
            data: y,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',]
            }]}
        const options = {
            title: {
              display: true,
              text: 'Expense Chart'
            }
          }
    return (
        <motion.div style={{width:'400px',margin:'0 auto'}}   
        // initial={{ x: "-300px", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // exit={{ x: "-300px", opacity: 0 }}
        animate={{
    x: 0,
    y: 0,
    scale: 1,
    rotate: 360,

  }}
        transition={{ease:'easeInOut', duration:.5, type: "spring",
  stiffness: 500,
  damping: 30}}>
         <Doughnut className='chart' data={data} options={options} />   
        </motion.div>
    )
}

export default Chart
