const users = require("./users/users.service.js");
const asdfghgfds = require("./asdfghgfds/asdfghgfds.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(asdfghgfds);
  // ~cb-add-configure-service-name~
};
