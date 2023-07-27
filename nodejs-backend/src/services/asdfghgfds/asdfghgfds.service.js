const { Asdfghgfds } = require('./asdfghgfds.class');
const createModel = require('../../models/asdfghgfds.model');
const hooks = require('./asdfghgfds.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/asdfghgfds', new Asdfghgfds(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('asdfghgfds');

  service.hooks(hooks);
};