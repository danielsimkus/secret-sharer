/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                    { action: 'view-homepage' },
  'PUT /secret':              { action: 'secret/create'},
  'GET /v/:uuId':              { action: 'secret/view',   skipAssets: true},
  'PUT /api/decrypt':              { action: 'secret/decrypt',   skipAssets: true},


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms':                   '/legal/terms'
};
