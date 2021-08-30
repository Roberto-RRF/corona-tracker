import React from "react";

import Hospitalization from "./Hozpitalization";
import DailyCases from "./DailyCases";
import Deaths from "./Deaths";
import RecoveredAndInfected from "./RecoveredAndInfected";

import styles from "./Charts.module.css";

const Charts = (props) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div>
          <h5>Pacientes en Hospitales publicos</h5>
          <Hospitalization data={props.data} />
        </div>
        <div>
          <h5>Nuevos casos confirmados</h5>
          <DailyCases data={props.data} />
        </div>
        <div>
          <h5>Muertes Diarias</h5>
          <Deaths data={props.data} />
        </div>
        <div>
          <h5>Recuperados vs. Infectados</h5>
          <RecoveredAndInfected data={props.data} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;
