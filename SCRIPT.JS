//write file
const fs = require('fs');
fs.writeFile("File.txt","Thus is Data of 1st file  ", function(err){
    if(err) console.log(error);
    else console.log("Done Write");    
})

// append file 
fs.appendFile("File.txt","  This is appended file/n",function(err){
    if(err) console.log(error);
    else console.log("Done Append")
})

  // rename file
 fs.rename("File.txt","RenamedFile.txt",function(err){
    if(err) console.log(error)
        else console.log("Done Rename")
 })
  //copy file
  fs.copyFile("RenamedFile.txt","./copy/copy.txt",function(err){
    if(err) console.log(error);
    else console.log("Done copy")
})

fs.unlink("RenamedFile.txt",function(err){
    if(err) console.log(error.message);
    else console.log("Unlink done");
})



console.log(fs.readFileSync("File.txt","utf8"));
