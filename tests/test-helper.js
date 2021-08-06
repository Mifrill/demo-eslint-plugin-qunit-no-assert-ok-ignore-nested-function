import Application from 'demo-eslint-plugin-qunit-no-assert-ok-ignore-nested-function/app';
import config from 'demo-eslint-plugin-qunit-no-assert-ok-ignore-nested-function/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
