import './style.css';
import { paintChart } from './creator';

const chartSelect = document.getElementById('chart-selector');

const chartContainer = document.getElementById('chart-container');

paintChart('bar', chartContainer);

chartContainer.setAttribute(
  'style',
  'width:400px;height:400px;margin-top:40px;'
);

chartSelect.onchange = async (e) => {
  const chartName = e.target.value;
  paintChart(chartName, chartContainer);
};
