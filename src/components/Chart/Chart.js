import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

//{ data: { confirmed, recovered, deadths }, countries }
function Chart({ data: { confirmed, recovered, deaths }, country }) {
  const [dataData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    fetchAPI();
  }, []);


  const lineChart =
    dataData && dataData.length !== 0 ? (
      <Line
        data={{
          labels: dataData.map(({ date }) => date),
          datasets: [
            {
              data: dataData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dataData.map(({ deadths }) => deadths),
              label: "Deadths",
              borderColor: "#red",
              backgroundColor: `rgba(255,0,0,0.5)`,
              fill: true,
            },
          ],
        }}
      />
    ) : (
      ""
    );

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deadths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : (
    ""
  );

  console.log(dataData);
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
}

export default Chart;
