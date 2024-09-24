import Cardui from "../Utilities/cardui"
import "@canvasjs/react-charts";
function Card() {
  var options = {
    animationEnabled: true,  
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
            { x: new Date(2024, 0), y: 25060 },
            { x: new Date(2024, 1), y: 27980 },
            { x: new Date(2024, 2), y: 33800 },
            { x: new Date(2024, 3), y: 49400 },
            { x: new Date(2024, 4), y: 40260 },
            { x: new Date(2024, 5), y: 33900 },
            { x: new Date(2024, 6), y: 48000 },
            { x: new Date(2024, 7), y: 31500 },
            { x: new Date(2024, 8), y: 32300 },
            { x: new Date(2024, 9), y: 45789 },

        ]
    }]
};
const generateDataPoints = (noOfDps)=> {
  var xVal = 1, yVal = 423;
  var dps = [];
  for(var i = 0; i < noOfDps; i++) {
    yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
    dps.push({x: xVal,y: yVal});	
    xVal++;
  }
  return dps;
}
const option2= {
  theme: "light2", // "light1", "dark1", "dark2"
  animationEnabled: true,
  zoomEnabled: true,
  data: [{
    type: "area",
    dataPoints: generateDataPoints(500)
  }]
}

var option4 = {
	animationEnabled: true,  
	axisY: {
		title: "Revenue in USD",
		valueFormatString: "#0,,.",
		suffix: "mn",
		prefix: "$"
	},
	data: [{
		type: "area",
		markerSize: 5,
		xValueFormatString: "YYYY",
		yValueFormatString: "$#,##0.##",
		dataPoints: [
			{ x: new Date(2011, 0), y: 1840000 },
			{ x: new Date(2012, 0), y: 1396000 },
			{ x: new Date(2013, 0), y: 2613000 },
			{ x: new Date(2014, 0), y: 1821000 },
			{ x: new Date(2015, 0), y: 1000000 },
			{ x: new Date(2016, 0), y: 1397000 },
			{ x: new Date(2017, 0), y: 1506000 },
			{ x: new Date(2018, 0), y: 1798000 },
			{ x: new Date(2019, 0), y: 2386000 },
			{ x: new Date(2020, 0), y: 4704000},
			{ x: new Date(2021, 0), y: 4926000 },
			{ x: new Date(2022, 0), y: 1394000 },
			{ x: new Date(2023, 0), y: 972000 },
			{ x: new Date(2024, 0), y: 1140000 }
		]
	}]
};

  var option3 = {
    
    title:{
      text: ""
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2024, 0, 1), y: 40 },
        { x: new Date(2024, 1, 1), y: 90 },
        { x: new Date(2024, 2, 1), y: 110 },
        { x: new Date(2024, 3, 1), y: 130 },
        { x: new Date(2024, 4, 1), y: 150 },
        { x: new Date(2024, 5, 1), y: 165 },
        { x: new Date(2024, 6, 1), y: 195 },
        { x: new Date(2024, 7, 1), y: 200 },
        { x: new Date(2024, 8, 1), y: 213 },
        { x: new Date(2024, 9, 1), y: 235 }

        ]
      }
      ]
  }
  return (
    <div class="cart-component">
      <Cardui bgcolor={"card-bg-1"} title={"Consumed Users"} value={45789} id={"chartContainer"} options={options} />
      <Cardui bgcolor={"card-bg-2"} title={"Total Requests"} value={423} id={"chartContainer_1"} options={option2} />
      <Cardui bgcolor={"card-bg-3"} title={"Active Users"} value={236} id={"chartContainer"} options={option3}/>
      <Cardui bgcolor={"card-bg-4"} title={"Revenue"} value={`$ ${1140000}`} id={"chartContainer"} options={option4}/>
      
</div>
  )
}

export default Card