
const userOptions = (queryString)=> {
    return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: queryString,
    }),
  };
}

const fetchQuery = (useroptions) =>{
  
     return fetch('https://learn.01founders.co/api/graphql-engine/v1/graphql', useroptions)
  .then((res) => res.json())
  .then( (userdata) =>{
    return userdata
  });

}
  
