let strokeDOF = 0
let totalXP

const GetTotalXPForPie=(xp, data)=>{
totalXP = xp
console.log('from pie', totalXP);
console.log('data', data);

BuildPieChart(totalXP, data);
}


const BuildPieChart = (xps, data)=>{

    for (const [key, value] of Object.entries(data)) {
        let proportion = value/totalXP *31.4
        var randomColor = Math.floor(Math.random()*16777215).toString(16);


        pieChart.innerHTML += `
        <circle r="5" cx="10" cy="10" fill="transparent"
        stroke=#${randomColor}
        stroke-width="10"
        stroke-dasharray="${proportion} 31.4"
        stroke-dashoffset="-${strokeDOF}"
        />	

        `
        strokeDOF += proportion
        console.log(proportion);
     //   console.log(`${key}: ${value}`);
      }



}





/*

` <g class="bar">
    <rect width="${scaledWidth}" height="19" y="${starterY}"></rect>
    <text x="${scaledPlus}" y="${yPosition}" dy=".35em">${subject}</text>
    <text x="10" y="${yPosition}" dy=".35em">${length} days</text>

  </g>`


<circle r="5" cx="10" cy="10" fill="transparent"
          stroke="tomato"
          stroke-width="10"
          stroke-dasharray="10.99 31.4" />
		  
  <circle r="5" cx="10" cy="10" fill="transparent"
          stroke="dodgerblue"
          stroke-width="10"
          stroke-dasharray="4.71 31.4"
		  stroke-dashoffset="-10.99"
		  />	  

*/