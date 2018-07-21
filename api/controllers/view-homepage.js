module.exports = {


  friendlyName: 'Homepage',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage/homepage.ejs'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Redirect the user'
    },

  },


  fn: async function (inputs, exits) {
    return exits.success();
  }


};
