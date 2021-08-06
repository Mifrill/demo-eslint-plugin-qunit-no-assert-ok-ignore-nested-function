import EmberRouter from '@ember/routing/router';
import config from 'demo-eslint-plugin-qunit-no-assert-ok-ignore-nested-function/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
