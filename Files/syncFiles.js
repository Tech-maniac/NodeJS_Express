const fs = require('fs');
// CRUD
//fs.mkdirSync("demo")

//CRUD : 

fs.writeFileSync("newFile.txt","This is the 1st line \n");

//fs.writeFileSync("newFile.txt","This is the 2nd line");

fs.appendFileSync("newFile.txt","This is the 2nd line \n");

console.log("MSSG");

//Buffer : 
data = fs.readFileSync("newFile.txt","utf-8");
console.log(data);

console.log("MSSG 2");

//Rename : 
//fs.renameSync("synchFiles.js","syncFiles.js");

//Delete : 
//fs.unlinkSync("newFile.txt");









