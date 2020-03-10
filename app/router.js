'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/login', controller.home.query);
  router.post('/login', controller.home.add);
  router.patch('/login', controller.home.update);
  router.delete('/login', controller.home.destroy);
  router.get('/layer', controller.layer.query);
  router.get('/layerId', controller.layer.queryId);
  router.post('/layer', controller.layer.add);
  router.patch('/layer', controller.layer.update);
  router.patch('/updateName', controller.layer.updateName);
  router.delete('/layer', controller.layer.destroy);
  router.get('/field', controller.field.query);
  router.post('/field', controller.field.add);
  router.patch('/field', controller.field.update);
  router.delete('/field', controller.field.destroy);
  router.post('/upload', controller.upload.query);
};
