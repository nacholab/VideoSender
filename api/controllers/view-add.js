module.exports = {


  friendlyName: 'View add',


  description: 'Display "Add" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/add'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
