import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | Index', function (hooks) {
  setupApplicationTest(hooks);

  test('renders index page test 1', async function (assert) {
    assert.expect(1);
    await sharedAssert(assert);
  });

  test('renders index page test 2', async function (assert) {
    assert.expect(1);
    await sharedAssert(assert);
  });

  async function sharedAssert(assert) {
    await visit('/');
    assert.ok(true);
  }
});
