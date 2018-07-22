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
        key: "string",
        uuId: "string"
      },
      description: 'Requesting user is a guest, so show the public landing page.',
    },
    secretEmpty: {
      responseType: 'badRequest',
      description: 'Please provide a secret'
    },
    secretTooLong: {
      responseType: 'badRequest',
      description: 'Secret entered is too long (max 500)'
    }

  },

  fn: async function (inputs, exits) {


    if (!inputs.secret) {
      return exits.secretEmpty();
    }
    if (inputs.secret.length > 500) {
      return exits.secretTooLong();
    }
    var key='moo123';
    var uuId='1234-1234-1234-1234';
    var encryptedSecret = await sails.helpers.encryptSecret.with({
      key: key,
      secret: inputs.secret
    });

    // ToDo: Hash Key, and Store hashed version, uuId, and Hashed Secret together

    return exits.success({key:key, uuId:uuId});

  }


};
