import React, { useState, useEffect } from "react";

import {
  GroupCards,
  Charts
} from "./components";
import { getInfo } from "./api/FireServices";
import styles from "./App.module.css";

const App = () => {
  const [dailyData, setDailyData] = useState([]);
  const [cardInfo, setCardInfo] = useState({});

  const fetchData = async () => {
    try {
      const data = await getInfo();
      await setDailyData(data);
      await setCardInfo({
        data: [
          {
            title: "Infectados",
            amount: data[data.length - 1].newInfected,
            type: "blue",
            description: "Nuevos casos confirmados",
          },
          {
            title: "Hospitalizados",
            amount: data[data.length - 1].hospitalizedPatients,
            type: "yellow",
            description: "Pacientes en hospitales publicos",
          },
          {
            title: "Muertes",
            amount: data[data.length - 1].deaths,
            type: "black",
            description: "Nuevas muertes registradas",
          },
          {
            title: "Total Contagiados",
            amount: data[data.length - 1].totalInfected,
            type: "green",
            description: "Numero total de contagiados",
          },
          {
            title: "Total Recuperados",
            amount: data[data.length - 1].totalRecovered,
            type: "orange",
            description: "Numero total de recuperados",
          },
        ],
        date: data[data.length - 1].date,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>Información COVID-19 Yucatan</h1>
      <GroupCards cardInfo={cardInfo} />
      
      <Charts data={dailyData}/>
    </div>
  );
};

export default App;
