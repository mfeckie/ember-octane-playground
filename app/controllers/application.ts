import Controller from '@ember/controller';

export default class Application extends Controller{
  plainValue = 'Hello'
  mutableObject = {
    message: 'Hello'
  }
  array = [];
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'application': Application;
  }
}
