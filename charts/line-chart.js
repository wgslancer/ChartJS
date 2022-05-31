const initLineChart = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Value',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
  };
  return config;
};

export default initLineChart();