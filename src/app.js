import AuthService from 'AuthService';


export class App {

  static inject() {return [AuthService]}
  constructor(AuthService) {
  	this.auth = AuthService;
  }

  configureRouter(config, router) {
    this.router = router
    config.title = 'RRS'
    config.map([
      { route: ['', 'resources'], name: 'resources', moduleId: 'resources' },
      { route: 'resources/:id', name: 'resource', moduleId: 'resource' }
    ])
  }
}

export class ToJSONValueConverter {
  toView(obj) {
    if (obj) {
      return JSON.stringify(obj, null, 2)
    }
  }
}