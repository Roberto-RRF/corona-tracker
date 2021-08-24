import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";


const DailyHospitalizedPatients = ({dailyData}) => {
    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => (date)),
              datasets: [{
                data: dailyData.map((data) => data.hospitalizedPatients),
                label: 'Pacientes en Hospitales Publicos',
                borderColor: 'yellow',
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

export default DailyHospitalizedPatients;
