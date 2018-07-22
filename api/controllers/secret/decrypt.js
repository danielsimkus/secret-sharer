module.exports = {


  friendlyName: 'Decrypt that Secret',


  description: 'Decrypt that Secret',

  inputs: {
    key: {
      required: true,
      type: 'string',
      description: 'The secret to be encoded.',
      example: 'password123'
    },
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
      outputType: {
        key: "string",
        url: "string"
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

    console.log(inputs.uuId);
    //ToDo: Hash key and compare with one stored with Secret
    encryptedSecret = 'asdasda';

    decryptedSecret = 'facepalm';
     /*var decryptedSecret = await sails.helpers.decryptSecret.with({
       key: inputs.key,
       secret: encryptedSecret
     });*/


    //ToDo: Delete the secret

    return exits.success(decryptedSecret);

  }


};
