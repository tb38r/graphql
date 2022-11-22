let yPosition = 9
let starterY= 1
const incrementY = 20


const barContent =(length, subject)=>{

    let scaledWidth= length*3
    let scaledPlus = 250

    return ` <g class="bar">
    <rect width="${scaledWidth}" height="19" y="${starterY}"></rect>
    <text x="${scaledPlus}" y="${yPosition}" dy=".35em">${subject}</text>
    <text x="10" y="${yPosition}" dy=".35em">${length} days</text>

  </g>`
}


const populateBarChart=(obj)=>{
    console.log(obj);
Object.entries(obj).forEach(([key,value])=>{

    let barDiv = barContent(value.toComplete, key)

    barChart.innerHTML += barDiv
    yPosition+=incrementY
    starterY+= incrementY


}),
yPosition = 9
starterY=0
}


/*
Object.entries(obj).forEach(([key, value]) => {
    let pTag = document.createElement('p')
   let divContent =(`${key.toLocaleUpperCase()}: Grade: ${value.grade.toFixed(3)} XP: ${value.xp}`)
   pTag.innerHTML = divContent
   gradesXPDiv.appendChild(pTag);
});

*/