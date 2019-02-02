module.exports = {

    uploads: async function (req, res) {
        //  console.log (req.param.name);
          req.file('video').upload({
              dirname: require('path').resolve(sails.config.appPath, 'video/'),
              saveAs: req.param('name')
            },function (err, uploadedFiles) {
              if (err) return res.serverError(err);
            
              return res.json({
                message: uploadedFiles.length + ' file(s) uploaded successfully!'
              });
            }); 
    }
    
};
  