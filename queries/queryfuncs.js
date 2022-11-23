
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

const fetchQuery = async (useroptions) =>{
  
     const res = await fetch('https://learn.01founders.co/api/graphql-engine/v1/graphql', useroptions);
  const userdata = await res.json();
  return userdata;

}
  
