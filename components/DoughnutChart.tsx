'use client'
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from "chart.js"
import { Doughnut} from "react-chartjs-2"



ChartJs.register(ArcElement, Tooltip, Legend);



const DoughnutChart = () => {
    const data ={
        datasets:[
            { label: 'Banks', data:[3213, 9839,9898], backgroundColor:['#FF6384', '#36A2EB', '#FFCE56']}
        ],
        labels:['NDC', 'NPP', 'CPP']
    }
  return <Doughnut data={data}
    
    options={{
        plugins:{
            legend:{
               position: 'top'
            },
            title:{
                display: true,
                text: 'Presidential Election Results',
            }
        }
        
    }}
  />
}

export default DoughnutChart