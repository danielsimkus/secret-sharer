module.exports = {


  friendlyName: 'Decrypt a secret, with a given Key',


  description: 'Decrypt a secret, with a given Key. Passing an alternative algorithm is also supported.',


  extendedDescription:
`This returns an decryptedSecret`,


  inputs: {


    secret: {
      description: 'The encrypted secret to decrypt.',
      example: 'ASD0F0D',
      required: true
    },

    key: {
      description: 'The key to use during decryption.',
      example: '9uaj9sdjaasda',
      required: true
    },

    algorithm: {
      description: 'The algorithm to use for the decryption',
      example: 'aes-256-ctr',
      required: false,
      defaultsTo: 'aes-256-ctr'
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Success',
      outputDescription: 'Decrypted successfully.',
      outputType: 'string'
    }

  },


  fn: async function(inputs, exits) {

    var crypto = require('crypto'),
      algorithm = inputs.algorithm? inputs.algorithm.toLowerCase() : 'aes-256-ctr';
    cipher = crypto.createDecipher(algorithm,inputs.key);
    var decryptedSecret = cipher.update(inputs.secret,'hex','utf8')
    decryptedSecret += cipher.final('utf8');

    return exits.success(decryptedSecret);

  }

};
