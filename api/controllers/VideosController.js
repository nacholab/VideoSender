module.exports = {

    uploads: async function (req, res) {
          console.log (req.allParams());
          req.file('video').upload({
              dirname: require('path').resolve(sails.config.appPath, 'video/'),
              saveAs: req.param('name')
            },function (err, uploadedFiles) {
              if (err) return res.serverError(err);
              /*return res.json({
                message: uploadedFiles.length + ' file(s) uploaded successfully!'
              });*/
              return true;
            });

            
            var newNameVideo = req.param('name');
            var newPathVideo = require('path').resolve(sails.config.appPath, 'video/') + newNameVideo;
            await Video.create(Object.assign({
              name: newNameVideo,
              path: newPathVideo
                }, ))
            .fetch();

            return res.json({
              message: 'file(s) uploaded successfully!'
            });
    }
    
};
