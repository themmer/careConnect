import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | wait-time', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:wait-time');
    assert.ok(route);
  });
});
