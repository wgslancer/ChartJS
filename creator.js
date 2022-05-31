import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const charts = {
  bar: () => import('./charts/bar-chart'),
  line: () => import('./charts/line-chart'),
  pie: () => import('./charts/pie-chart'),
};

export const paintChart = async (
  chartName,
  containerElement,
  chartOptions = charts
) => {
  const { default: config } = await chartOptions[chartName]();

  const chart = document.createElement('canvas');

  containerElement.innerHTML = '';

  new Chart(chart, config);

  containerElement.appendChild(chart);
};
