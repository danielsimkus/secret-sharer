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
    noStoredSecret: {
      responseType: 'badRequest',
      description: 'There is no stored secret with the given UUID'
    },
    invalidKey: {
      responseType: 'badRequest',
      description: 'The provided key is incorrect'
    }
  },

  fn: async function (inputs, exits) {

    uuId = inputs.uuId;
    key = inputs.key;
    //ToDo: Hash key and compare with one stored with Secret
    storedSecret = await Secret.findOne({
      uuId: uuId
    });

    if (!storedSecret) {
      return exits.noStoredSecret();
    }

    hashOfKey = await sails.helpers.hashKey(key);

    if (hashOfKey !== storedSecret.hashOfKey) {
      return exits.invalidKey();
    }

     var decryptedSecret = await sails.helpers.decryptSecret.with({
       key: key,
       secret: storedSecret.encryptedSecret
     });


    await Secret.destroy({
      where: {
        uuId: uuId
      }
    });

    return exits.success(decryptedSecret);

  }


};
