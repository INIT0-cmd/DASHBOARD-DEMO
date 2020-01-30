import React from 'react';
import {Line} from 'react-chartjs-2';
import { minHeight } from '@material-ui/system';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Scans',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class Chart extends React.Component {
   
  render() {
    const minHeight={
        height:"80px"
    }
    return (
      <div>
        <Line 
          data={state}
          width={200}
          height={176}
          options={{
            title:{
              display:true,
              text:'ACTIVITIES',
              fontSize:20,
              fontColor:'#6bb373',
              position:'left'
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}