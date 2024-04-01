import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const data = {
    labels: ['Groceries', 'Utilities', 'Transportation', 'Shopping', 'Dining'],
    datasets: [
      {
        label: 'Expense Categories',
        data: [300, 50, 100, 150, 200],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)', // red
          'rgba(54, 162, 235, 0.5)', // blue
          'rgba(255, 206, 86, 0.5)', // yellow
          'rgba(75, 192, 192, 0.5)', // green
          'rgba(153, 102, 255, 0.5)', // purple
        ],
        borderColor: [
          'rgba(255,99,132,1)', // red
          'rgba(54, 162, 235, 1)', // blue
          'rgba(255, 206, 86, 1)', // yellow
          'rgba(75, 192, 192, 1)', // green
          'rgba(153, 102, 255, 1)', // purple
        ],
        borderWidth: 1,
      },
    ],
  };

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoricalSpendingsChart = () => {
  return (
    <>
    <div className="flex flex-row justify-between align-middle items-center m-2 h-10">March 2024's Categorical Distribution</div>
    <div style={{ width: '600px', height: '400px' }} className='mt-5'> {/* Adjust the width and height as needed */}
        <Pie 
            data={data} 
            options={{ maintainAspectRatio: false }} // Add this to maintain the aspect ratio
        />
    </div>
    </>
  )
}

export default CategoricalSpendingsChart