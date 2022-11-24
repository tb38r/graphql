let strokeDOF = 0
let totalXP

const GetTotalXPForPie=(xp, data)=>{
totalXP = xp
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

        let legend = document.createElement('div')
        legend.className = 'legends' 
        legend.innerText = `${key} : ${proportion.toFixed(2)}%`
        legend.style.backgroundColor = `#${randomColor}`
        //legend.style.color = randomColor
        console.log('pp',pieLegend);
        pieLegend.appendChild(legend)
      }



}



