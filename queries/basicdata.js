

let basicDataQuery = `
{ user (where:{login:{_eq:"tb38r"}}){
    id
    login
    
  }}
`
fetchQuery(userOptions(basicDataQuery))
.then((data)=>{
    Object.entries(data.data.user[0]).forEach(
        ([key, value]) => {
            let headerdata = document.createElement('div');
            headerdata.innerHTML = `${key}:${value}`  
            headerDiv[0].appendChild(headerdata)
            
         })

})
