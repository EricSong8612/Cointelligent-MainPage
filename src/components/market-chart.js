import React from 'react'
import Link from 'gatsby-link'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
      {time: '1', value: 2000},
      {time: '2', value: 2400},
      {time: '3', value: 3400},
      {time: '4', value: 1800},
      {time: '5', value: 2800},
      {time: '6', value: 2400},
      {time: '7', value: 1900},
      {time: '8', value: 2900},
      {time: '9', value: 2000},
      {time: '10', value: 3000},
];
const SimpleLineChart = React.createClass({
	render () {
  	return (
      <div className='chart'>
        <h1 style={{fontWeight:'300'}}>$4235.82 <span style={{color:'rgb(31,199,142)'}}>(2.67%)</span></h1>
        <p>1.00 BTC (0.00%)</p>
        <ResponsiveContainer width='100%' height={250} minWidth={300}>
        	<LineChart data={data}>
           <XAxis dataKey="time"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           {/* <Legend /> */}
           <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{r: 6}}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
})

export default SimpleLineChart;



//
//
// export default class myChart extends React.Component {
//   state={
//     chartData: {
//         labels: [],
//         datasets: [{
//             data: [],
//             fillColor: ''
//         }]
//     },
//     chartOptions: {
//       scaleShowGridLines: false,
//       bezierCurve: true,
//       bezierCurveTension: 0.4,
//       pointDot: false,
//       datasetStroke: true,
//       datasetStrokeWidth: 2,
//       datasetFill: true,
//       scales: {
//         xAxes: [{
//           display: false
//         }],
//         yAxes: [{
//           display: false
//         }],
//       }
//     }
// }
//
//   componentWillMount() {
//     fetch('https://api.gdax.com/products/btc-usd/candles').then(response => {
//         return response.json();
//     }).then(dataArray => {
//         let chartLabels = [];
//         let closeData = [];
//         dataArray.map(item => {
//           chartLabels.push('');
//           closeData.push(item[4]);
//         });
//         let dataObject = {
//           labels: [...chartLabels],
//           datasets: [{
//               data: [...closeData],
//               fillColor: 'rgba(0, 200, 0, 0.1)'
//           }]
//         };
//         this.setState({chartData:dataObject})
//     });
//   }
//
//   render() {
//     return(
//       <div style={{marginTop:'1em'}}>
//         <LineChart
//           redraw
//           data={this.state.chartData}
//           options={this.state.chartOptions}
//           width="800"
//           height="300"
//         />
//       </div>
//     )
//   }
// };
