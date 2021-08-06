import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | Index', function (hooks) {
  setupApplicationTest(hooks);

  test('renders index page test 1', async function (assert) {
    await visit('/');
    assert.ok(true);
  });

  test('renders index page test 2', async function (assert) {
    await visit('/');
    assert.ok(true);
  });
});
