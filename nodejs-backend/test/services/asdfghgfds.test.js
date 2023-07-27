const assert = require('assert');
const app = require('../../src/app');

describe('\'asdfghgfds\' service', () => {
  it('registered the service', () => {
    const service = app.service('asdfghgfds');

    assert.ok(service, 'Registered the service (asdfghgfds)');
  });
});
