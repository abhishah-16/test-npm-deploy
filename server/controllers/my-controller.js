'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('nodedeploy')
      .service('myService')
      .getWelcomeMessage();
  },
});
