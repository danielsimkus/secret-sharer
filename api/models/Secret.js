/**
 * User.js
 *
 * A user who can log in to this application.
 */

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
    uuid: {
      type: 'string',
      description: 'The identified for the secret, passed via the URL to the opener'
    }
  },


};
