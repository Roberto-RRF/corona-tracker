import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./Chart.module.css";

const Deaths = (props) => {
  return (
    <div className={styles.chart2}>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="deaths"
              name="Muertes"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              dot={false}
            />
            {/* <Line
              type="monotone"
              dataKey="newInfected"
              name="Contagios registrados"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Deaths;
