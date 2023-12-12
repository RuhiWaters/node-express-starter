const express = require('express');

console.log('!!!NODE WITH EXPRESS!!!');

//initializing app
const app = express();
console.log(app);

//run the app
//function param as callback function
//-arrow functions remove context so 'this' doesn't exist 

app.listen(5001, () => {
    console.log('Application running on PORT 5001');
}); 
//NOTE: listen: open up a chain of communication so the client side can communicate with the server
//- opens up port 5001 and waiting to hear from the client side if it has a request. 
//- If you run it with out this code it means it is constantly running.
//- Only was to exit the application or kill it from running , 
//  also kill app with control+C=exit (stop running the server)
//- when you use listen, when you run it you know its active and your connection is open.

//Third way to write a function ^^^
//can also write the same function in these different ways and they will do the same thing:
// const name=() {
//  this    
//}
//const name = function( {}

//public folder- predefined, static files served up to your computer to serve up to your computer 
//(e.g. can add colorblocks- 3 files you need and paste into public folder)

//- tell express app that it needs to use public for static files, somebody requesting wil run file
app.use(express.static('server/public'));