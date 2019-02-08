let fs = require('fs');
let dotenv = require('dotenv');

dotenv.config();

if(process.env.PATH_FILE === undefined ){
  console.error('Le path des fichiers n\'est pas spécifié');
}
module.exports = {


  friendlyName: 'View view',


  description: 'Display "View" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/video/view'
    },
    notFound: {
      responseType: 'notFound'
    }

  },

  inputs: {

    video: {
      type: 'string'
    },

  },


  fn: async function (inputs, exits) {
    let video_name = '';
    if (inputs.video == undefined || inputs.video == ''){
        sails.log.error('Valeur non trouvé :/');
        return exits.notFound();
    }
    let path = process.env.PATH_FILE;
    var files = fs.readdirSync(path);
    for (var i in files) {
      if (inputs.video == files[i].replace(/\.[^/.]+$/, "")){
        sails.log.info('La video comportant le nom: '+inputs.video+' existe !');
        video_name = files[i];
      }
    }
    if (video_name == ""){
      return exits.notFound();
    }
   return exits.success({value: true, video_name: video_name});
  }


};
