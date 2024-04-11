const fs=require('fs');
// sync
// fs.writeFileSync("./test.txt","hey viewers");

//Async
// fs.writeFile("./test.txt","hello async",(err)=>{});

// //sync
// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

// Async
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
// if(err){
//     return console.log("err this side");
// }
// else{
//     return console.log(result);
// }
// });

fs.appendFileSync("./test.txt",`${Date.now()}Hey there \n`);

//copy
// fs.cpSync('./test.txt','./copy.txt');

// delete
// fs.unlinkSync('./copy.txt');

fs.mkdirSync('my-directory/a/b',({recursive:true}));

