const { error } = require("console")
const fs=require("fs")

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err) throw error
        console.log("fle created")
     })
}

// Note : fs.existsSync() is used to check whether the file exists or not in the synchronous mode.