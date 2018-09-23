import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | favorites/me', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:favorites/me');
    assert.ok(route);
  });
});
