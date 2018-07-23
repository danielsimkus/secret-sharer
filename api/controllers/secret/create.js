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
    // generate between 12 and 26 character random string
    var key = await sails.helpers.createRandomKey.with({ keyLength: Math.floor(Math.random() * 14) + 12  });
    do {
      var c = 1;
      var uuId = '';
      while (c < 5) {
        uuId += (c > 1) ? '-' : '';
        uuId += await sails.helpers.createRandomKey.with({keyLength: 4, allowSymbols: false});
        c++;
      }
    } while ( await Secret.findOne({uuId: uuId})); // Make sure we've not used a uuId that's already in use

    var encryptedSecret = await sails.helpers.encryptSecret.with({
      key: key,
      secret: inputs.secret
    });

    var hashOfKey = await sails.helpers.hashKey(key);
    console.log({encryptedSecret: encryptedSecret, uuId: uuId, hashOfKey: hashOfKey});
    var saved = await Secret.create({encryptedSecret: encryptedSecret, uuId: uuId, hashOfKey: hashOfKey});
    console.log(saved);

    // ToDo: Hash Key, and Store hashed version, uuId, and Hashed Secret together

    return exits.success({key:key, uuId:uuId});

  }


};
