let cumulativeGrades = 
`
query{
    user(where: {login: {_eq: "tb38r"}}){
        login
        id
        progresses(where:{
            _and: [{object:{type:{_eq:"project"}}}, {isDone: {_eq: true}}]}){
          createdAt
          updatedAt
          results{
            grade
          }
          object{
            name
          }
        }
      
       }
}

`


fetchQuery(userOptions(cumulativeGrades))
.then((data)=>{

    let grades = data.data.user[0].progresses;


   for (const obj of grades) {
    if(!gradesObj.hasOwnProperty(obj.object.name)){
        gradesObj[obj.object.name] = {
          grade:obj.results[0].grade,
        toComplete : Math.round((new Date(obj.updatedAt).getTime() - new Date(obj.createdAt).getTime())/(1000*3600*24))
        }

    }else{
        if(obj.results[0].grade > gradesObj[obj.object.name].grade){
            gradesObj[obj.object.name].grade = obj.results[0].grade
        }

    }
   }


}
);





const updateGradesObj =(data)=>{


for (const item of data) {
  if(gradesObj.hasOwnProperty(item.object.name)){
    if (!gradesObj[item.object.name].hasOwnProperty('xp')){
      gradesObj[item.object.name].xp = item.amount
    }else{
      if( gradesObj[item.object.name].xp < item.amount){
        gradesObj[item.object.name].xp =item.amount
      }
    }

  }
}


populateCarousel(gradesObj)

}


const populateCarousel =(obj)=>{
  Object.entries(obj).forEach(([key, value]) => {
    let pTag = document.createElement('p')
   let divContent =(`${key.toLocaleUpperCase()}: Grade: ${value.grade.toFixed(3)} XP: ${value.xp}`)
   pTag.innerHTML = divContent
   gradesXPDiv.appendChild(pTag);
});



const sorted = Object.fromEntries(
  Object.entries(gradesObj).sort((x, y) => x[1].toComplete - y[1].toComplete)
);


populateBarChart(sorted)

}


