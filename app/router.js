'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/login', controller.home.query);
  router.post('/login', controller.home.add);
  router.patch('/login', controller.home.update);
  router.delete('/login', controller.home.destroy);
  router.get('/layer', controller.layer.query);
  router.post('/layer', controller.layer.add);
  router.patch('/layer', controller.layer.update);
  router.delete('/layer', controller.layer.destroy);
};
