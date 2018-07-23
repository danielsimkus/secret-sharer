module.exports = {


  friendlyName: 'Hash Key',


  description: 'Hash a Key',


  extendedDescription:
`This returns an encryptedSecret`,


  inputs: {


    key: {
      description: 'The key to hash.',
      example: '99df9jfjfja9fsjf9ajfas9jdASd()d',
      type: 'string',
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Success',
      outputDescription: 'Returns the hashed Key.',
      outputType: 'string'
    }

  },


  fn: async function(inputs, exits) {

    var crypto = require('crypto'),
      algorithm = 'sha512';
    return exits.success(crypto.createHash(algorithm).update(inputs.key).digest('hex'));
  }

};
