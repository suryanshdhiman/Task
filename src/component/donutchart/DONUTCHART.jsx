
// import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);


const DONUTCHART = ({
  completedTasks,
  pendingTasks,
}) => {

  let data = [
    {
      label: "completed tasks",
      value: completedTasks,
      color: "rgba(27, 191, 2)",
      cutout: "50%",
    },
    {
      label: "Pending tasks",
      value: pendingTasks,
      color: "rgba(14, 99, 1)",
      cutout: "50%",
    },
  ]

  const options = {
    plugins: {
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };


  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return (
    <>
      <Doughnut data={finalData} options={options} />
      <br />
    </>
  );
};


export default DONUTCHART;
