'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.query);
  router.post('/home', controller.home.add);
  router.patch('/home', controller.home.update);
  router.delete('/home', controller.home.destroy);
};
