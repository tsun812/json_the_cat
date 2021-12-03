const request = require('request');
const breedName = process.argv[2];
request('https://api.thecatapi.com/v1/breeds/search'+`?q=${breedName}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  if(error) console.log(error)
  const parseJ = JSON.parse(body)
  let res = parseJ[0].description
  console.log(res);
});
