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

let gradesObj = {}
let completion= {}

fetchQuery(userOptions(cumulativeGrades))
.then((data)=>{

    let grades = data.data.user[0].progresses;
console.log('grades', grades);


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

//    const sortedgradesObj = Object.fromEntries(
//     Object.entries(gradesObj).sort(([, a], [, b]) => a - b)
// )
// const date1 = new Date('2017-11-25T23:45:35.116Z').toISOString();
// console.log({date1});
console.log('GRADESOBJPRE', gradesObj);

// let firstDate = new Date(grades[0].updatedAt)
// timeBetween = firstDate.getTime()- new Date(grades[0].createdAt).getTime()
// console.log('DaysBetween?', timeBetween/(1000*3600*24))
//console.log('Sorted Grades', sortedgradesObj)
//console.log('Sum', Object.values(sortedgradesObj).reduce((a, b) => a + b, 0));



}
);



if(nextFunc){
  console.log('hi');
  //ascii-art : {grade: 1.5428571428571431, toComplete: 2}

for (const item of transactions) {
  if(gradesObj.hasOwnProperty(item.object.name)){
    if (!gradesObj[item.object.name].hasOwnProperty('xp')){

      gradesObj[item.object.name].xp = item.amount
    }else{
      console.log('a',item.amount);
    }

  }
  //console.log('i',item.object.name);
  
}

  console.log('POSTGRADESOBJ', gradesObj);

}