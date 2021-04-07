import React, { Component } from 'react'
import CanvasJSReact from '../../canvas/canvasjs.react';

//var CanvasJSReact = require('./../canvas/canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Canvas extends Component {

  render() {

    let dataPoints0 = [];
    for (let key in this.props.myDataBase){
      dataPoints0.push({
        label: key,
        y: this.props.myDataBase[key]
      })
    }


    const options = {

      colorSet: "colorSet3",

      axisX: {
        labelFontColor: "#e8e8e8"
      },

      axisY: {
        labelFontColor: "#e8e8e8"
      },

      backgroundColor: "#141414",
      title: {
        fontColor: "white",
        text: "Choose  your  next  binge"
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
