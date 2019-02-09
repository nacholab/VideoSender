let fs = require('fs');
let dotenv = require('dotenv');

dotenv.config();

if(process.env.PATH_FILE === undefined ){
  console.error('Le path des fichiers n\'est pas spécifié');
}
module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {
    let path = process.env.PATH_FILE;
    var files = fs.readdirSync(path);

    return {list_video: files};

  }


};