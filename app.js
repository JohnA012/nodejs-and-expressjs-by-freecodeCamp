// const amount = 12;

// if(amount < 10){
//     console.log('small number');
// }else{
//     console.log('large number');
// }

// console.log(`hey its my first node app`);


/*
//1-intro js
global  - no window !!!

__dirname   - path to current directory
__filename  - file name
require     -function to use modules (CommonJS)
module      -info about current module (file)
process     - info about env where the program is being executed

*/
// console.log(__dirname);
// setInterval(() =>{
//     console.log('hello world');
// },1000)


/*
modules
// */
// const names = require('./4-name')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
// require('./7-mind-grenade')//this is for the 7-mind-grenade and no need to put in a variable since its only a function
// // console.log(names);
// // sayHi('August')
// // sayHi(names.peter)
// // sayHi(names.migz)
// // console.log(module);


// ---------------------------------------------------------------
/*
// -Built-in Modules
//     -os
//     -PATH
//     -FS
//     -HTTP
// */
// const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user);
// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS);

// -----------------------------------------------------------------
// // path module
// const path = require('path')
// console.log(path.sep);
// const filePath = path.join('/content','subfolder','test.txt')
// console.log(filePath);
// const base = path.basename(filePath)
// console.log(base);
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute);

// -------------------------------------------------------------
// // fs module 
// synchronous type 10.
// const {readFileSync,writeFileSync} = require('fs');
// console.log('starting');
// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')
// // console.log(first,second);
// writeFileSync('./content/result-sync.txt',
// `Here is the result: ${first},${second}`,
// {flag: 'a'})
// console.log('done with this task');
// console.log('starting the next one');


//---------------------------------------------------------------------
// // async type 11.
// const {readFile,writeFile} = require('fs')
// console.log('start')
// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     // console.log(result);
//     const first = result;
//     readFile('./content/second.txt','utf-8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return;

//         }
//         const second = result
//         writeFile('./content/result-sync.txt',
//         `Here is the result: ${first},${second}`,(err,result) =>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log('done with this task');
//             console.log(result);
//         })
//     })
// })
// console.log('starting next task')



// ---------------------------------------------------------------
// http
/*12.
    -Brief Intro
    -Cover in Detail Later(Next Section)
*/
// const http = require('http')
// const server = http.createServer((req,res) =>{
//     if(req.url === '/'){
//         res.end('Welcome to our homepage')
//     }
//     if(req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//         <h1>Oops! </h1>
//         <p>We can't seem to find the page you are loooking for</p>
//         <a href="/">Back Home</a>`)
// })

// server.listen(5000)


// --------------------------------------------------
/*13.
    npm - global command, comes with node
    npm --version

    local dependency - use it only in this particular project
    npm i <packageName>

    global dependency - use it in any project
    npm install -g <packageName> //for windows
    sudo install -g <packageName> //for mac

    package.json - manifest file (stores important info about project/package)
    manual approach (create package.json in the root , create properties etc)
    npm init (step by step, press enter to skip)
    npm init -y (everything default)
*/
// require lodash
const _ = require('lodash')

const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

