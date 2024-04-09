const fs=require('fs')
const path=require('path')

const rf=fs.createReadStream(path.join(__dirname,'text.txt'),'utf-8')
const wf=fs.createWriteStream(path.join(__dirname,'newText.txt'))

rf.on('data', (chunk)=>{
     wf.write(chunk)
})

rf.pipe(wf,{end:false}) 