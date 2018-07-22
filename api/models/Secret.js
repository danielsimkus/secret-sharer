
module.exports = {

  attributes: {
    secret: {
      type: 'string',
      description: 'The encrypted secret'
    },
    keyHash: {
      type: 'string',
      description: 'The hash of the created key, to be compared with their input to validate their secret'
    },
    viewId: {
      type: 'string',
      description: 'The identifier for the secret, passed via the URL to the view controller'
    }
  },


};
