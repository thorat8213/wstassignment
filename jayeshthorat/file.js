const fs = require('fs');
fs.readFile('abc.txt','utf8',(err,data)=>{

   if(err){
    console.log(err);
   }else{
    console.log(data);
   }
   
});
console.log('File reading started');