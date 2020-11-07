import Router from './router';
import Model from './model';
import View from './view';
import utils from './utils/index';

export default class Controller {
  constructor() {
    this.router = new Router(this);
    this.view = new View(this);
    this.model = new Model();
  }

  init() {
    this.router.init();
    this.view.init();
  }

  setPage(page) {
    this.view.changePage(page);
  }
}
