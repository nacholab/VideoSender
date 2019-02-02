/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true,
            maxLength: 120,
          },
          path: {
            type: 'string',
            required: true,
          },
    },
  
  
  };
  