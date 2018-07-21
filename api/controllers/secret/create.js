module.exports = {


  friendlyName: 'Create Secret',


  description: 'Create a Secret',

  inputs: {
    secret: {
      required: true,
      type: 'string',
      description: 'The secret to be encoded.',
      example: 'password123'
    }
  },
  exits: {

    success: {
      statusCode: 200,
      outputType: {
        hello: "string"
      },
      description: 'Requesting user is a guest, so show the public landing page.',
    },
    secretEmpty: {
      responseType: 'badRequest',
      description: 'Please provide a secret'
    }

  },


  fn: async function (inputs, exits) {


    if (!inputs.secret) {
      return exits.secretEmpty();
    }

    return exits.success({hello:"you"});

  }


};
