import React, { Component } from 'react'
import CanvasJSReact from '../../canvas/canvasjs.react';

//var CanvasJSReact = require('./../canvas/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Canvas extends Component {

  render() {
    console.log(this.props.myDataBase);

    let dataPoints0 = [];
    for (let key in this.props.myDataBase){
      dataPoints0.push({
        label: key,
        y: this.props.myDataBase[key]
      })
    }

    console.log(dataPoints0);


    const options = {

      axisX: {
        labelFontColor: "#e8e8e8"
      },

      axisY: {
        labelFontColor: "#e8e8e8"
      },

      backgroundColor: "#141414",
      title: {
        fontColor: "white",
        text: "Your  analyzed  data"
      },
      data: [{
        type: "column",
        dataPoints: dataPoints0
      }]
    }

    return (
      <div className="myGraph">
        <CanvasJSChart options={options}
        /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}
