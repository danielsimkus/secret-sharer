module.exports = {


  friendlyName: 'Create a random string',


  description: 'Encrypt a secret, with a given Key. Passing an alternative algorithm is also supported.',


  extendedDescription:
`This returns an encryptedSecret`,


  inputs: {
    keyLength: {
      description: 'The length of the string to',
      example: 1,
      type: 'number',
      required: true
    },
    allowSymbols: {
      description: 'Can this include non-alphanumeric characters?',
      example: true,
      type: 'boolean',
      required: false,
      defaultsTo: true
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
    var length = inputs.keyLength;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // If we allow symbols, add more stuff to possible
    possible += (inputs.allowSymbols) ? "';!@#$%^&*(),./;'[]|" : '';
    for(var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return exits.success(text);
  }

};
