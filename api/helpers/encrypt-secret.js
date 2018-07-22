module.exports = {


  friendlyName: 'Encrypt a secret, with a given Key',


  description: 'Encrypt a secret, with a given Key. Passing an alternative algorithm is also supported.',


  extendedDescription:
`This returns an encryptedSecret`,


  inputs: {


    secret: {
      description: 'The secret to encrypt.',
      example: 'Sausages123',
      required: true
    },

    key: {
      description: 'The (unhashed) key used during encryption.',
      example: '9uaj9sdjaasda',
      required: true
    },

    algorithm: {
      description: 'The algorithm to use for the encryption',
      example: 'aes-256-ctr',
      required: false,
      defaultsTo: 'aes-256-ctr'
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Success',
      outputDescription: 'Encrypted successfully.',
      outputType: 'string'
    }

  },


  fn: async function(inputs, exits) {

    var crypto = require('crypto'),
      algorithm = inputs.algorithm? inputs.algorithm.toLowerCase() : 'aes-256-ctr';
    cipher = crypto.createCipher(algorithm,inputs.key);
    var encryptedSecret = cipher.update(inputs.secret,'utf8','hex')
    encryptedSecret += cipher.final('hex');

    return exits.success(encryptedSecret);

  }

};
