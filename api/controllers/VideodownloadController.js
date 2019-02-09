var fs = require('fs');
let dotenv = require('dotenv');

dotenv.config();

if(process.env.PATH_FILE === undefined ){
  console.error('Le path des fichiers n\'est pas spécifié');
}
module.exports = {
    friendlyName: 'video',
    description: 'upload and download a sound file.',
  
    download: async function (req,res) {
        if (req.query.video != undefined){
            /* var fullFilePath = process.env.PATH_FILE+req.query.video;

            if (! fs.existsSync(fullFilePath)) {
                res.json({succes:false, message:'file not exist'});
            }
            var stat = fs.statSync(fullFilePath);
         
            /*res.writeHead(200, {
                'Content-Type': 'video',
                'Content-Length': stat.size,
                'Accept-Ranges': 'bytes'
            }); 
            var readStream = fs.createReadStream(fullFilePath);
            readStream.pipe(res); */

            const path = process.env.PATH_FILE+req.query.video
            const stat = fs.statSync(path)
            const fileSize = stat.size
            const range = req.headers.range
            if (range) {
              const parts = range.replace(/bytes=/, "").split("-")
              const start = parseInt(parts[0], 10)
              const end = parts[1] 
                ? parseInt(parts[1], 10)
                : fileSize-1
              const chunksize = (end-start)+1
              const file = fs.createReadStream(path, {start, end})
              const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
              }
              res.writeHead(206, head);
              file.pipe(res);
            } else {
              const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
              }
              res.writeHead(200, head)
              fs.createReadStream(path).pipe(res)
            }
        } 
    
    
    else {
        res.json({succes:false, message: 'param is empty'});
    }
 },
};


