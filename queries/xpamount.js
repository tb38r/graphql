let projectsDiv = document.getElementsByClassName('projects')[0]
let totalXPDiv = document.getElementsByClassName('totalxp')[0]

let transactionsProgresses= `
query{
   user(where: {login: {_eq: "tb38r"}}){

      
transactions(where:{_or:[
            { _and: [{object:{type:{_eq:"piscine"}}},{amount:{_gte:100}}]},
  
{
             _and: [{
              createdAt:{_gt:"2022-03-15"}},
              {createdAt:{_lt:"2022-03-17"}},
              {object:{type:{_eq:"exercise"}}},
              {amount:{_gte:100}}
            ]},

{_and: [{object: {type: {_eq: "project"}}}, {type: {_eq: "xp"}},{amount:{_gte:4000}}]},


]}){
   createdAt
            amount
            object {
              name
            }
          }
       }
}
`
let XPObj = {}
let sortedXPObj

fetchQuery(userOptions(transactionsProgresses))
.then((data)=>{

    let transactions = data.data.user[0].transactions;
console.log('transacs', transactions);


   for (const obj of transactions) {
    if(!XPObj.hasOwnProperty(obj.object.name)){
        XPObj[obj.object.name] = obj.amount
    }else{
        if(obj.amount > XPObj[obj.object.name]){
            XPObj[obj.object.name] = obj.amount
        }

    }
   }

   const sortedXPObj = Object.fromEntries(
    Object.entries(XPObj).sort(([, a], [, b]) => a - b)
)

console.log(GetXP(sortedXPObj))
}
);



const GetXP =(arg)=>{
  let sum =0
for (const [key, value] of Object.entries(arg)) {
   // console.log(key, value)
    let projectDiv = document.createElement('div')
    let amountDiv = document.createElement('div')
    let combinedDiv = document.createElement('div')
    combinedDiv.classList.add('combineddiv')
    projectDiv.innerHTML = key
    amountDiv.innerHTML = value
    combinedDiv.appendChild(projectDiv)
    combinedDiv.appendChild(amountDiv)
    projectsDiv.appendChild(combinedDiv)
 

	sum += value
  
}
totalXPDiv.innerHTML = sum
return sum
}


//console.log('POST--->', XPObj);