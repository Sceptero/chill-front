import environment from './environment';
import AuthService from 'AuthService';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => {
    var auth = aurelia.container.get(AuthService)
    let root = auth.isAuthenticated() ?  'app' : 'login'
    aurelia.setRoot(root);
  })
}
