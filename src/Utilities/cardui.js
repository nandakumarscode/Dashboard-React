import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
function Cardui({bgcolor,title,value, options}) {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  return (
    <>
    <div className="card">
      <header className={`flex-jsb ${bgcolor}`}>
        <h3>{title}</h3>
        <h4>{value}</h4>
      </header>
      <article className="canvas-size">
      <CanvasJSChart options={options} style={{width:"100%", height:"250px" }}/>
      </article>
    </div>
    </>
  )
}

export default Cardui