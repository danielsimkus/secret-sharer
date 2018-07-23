module.exports = {


  friendlyName: 'View a Secret',


  description: 'View a Secret',

  inputs: {
    uuId: {
      required: true,
      type: 'string',
      description: 'The uuid passed to the viewpage.',
      example: 'dasd-asd-4123-dasda'
    }
  },
  exits: {

    success: {
      statusCode: 200,
      description: '.',
      viewTemplatePath: 'pages/secret/view.ejs'

    }

  },

  fn: async function (inputs, exits) {
      return exits.success({uuId: inputs.uuId});
  }


};
