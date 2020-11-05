const request = require('request');
const fs = require('fs');
let incomingVal = process.argv;
let domainName = incomingVal[2];
// let domainName = incomingVal[2];
let pathToStore = incomingVal[3]
// console.log(domainName);
// console.log(pathToStore);

request(`${domainName}`, (error, response, body) => {

  if (error) {
    console.log('Error : ', error);
  }

  console.log('response status code : ', response.statusCode);

  console.log('body : ',body);

  // write to a new file named 2pac.txt
  fs.writeFile(`${pathToStore}`, body, (err) => {
    // throws an error, you could also catch it here
    if (err) {

      console.log('Error inside writeFile : ', err);

    }

    // success case, the file was saved
    console.log('response saved!');
    console.log(`Downloaded and saved ${body.length} bytes to ${pathToStore}`);
  });

  // console.log('error: ', error);
  // console.log('statusCode: ', response && response.statusCode);
  // console.log('body: ',body);
});


// console.log(`Downloaded and saved 1235 bytes to ./index.html`);



