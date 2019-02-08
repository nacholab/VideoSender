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
            var fullFilePath = process.env.PATH_FILE+req.query.video;

            if (! fs.existsSync(fullFilePath)) {
                res.json({succes:false, message:'file not exist'});
            }
            var stat = fs.statSync(fullFilePath);
         
            /*res.writeHead(200, {
                'Content-Type': 'video',
                'Content-Length': stat.size,
                'Accept-Ranges': 'bytes'
            }); */
            var readStream = fs.createReadStream(fullFilePath);
            readStream.pipe(res);
        } 
    
    
    else {
        res.json({succes:false, message: 'param is empty'});
    }
 },
};

