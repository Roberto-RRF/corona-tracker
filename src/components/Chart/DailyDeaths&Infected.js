import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";


const DailyDeathsInfected = ({dailyData}) => {
    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => (date)),
              datasets: [{
                data: dailyData.map((data) => data.newInfected),
                label: 'Infectados',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Muertes',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0,0.5)',
                fill: true,
              }
              ],
            }}
          />
        ) : null
      );
    
      return (
        <div className={styles.container}>
          {lineChart}
        </div>

);

    
};

export default DailyDeathsInfected;
