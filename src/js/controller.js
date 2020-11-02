import Router from './router';
import Model from './model';
import View from './view';
import utils from './utils/index';

export default class Controller {
  constructor() {
    this.router = new Router();
    this.view = new View();
    this.model = new Model();
  }

  init() {
    this.view.init();
  }
}
