import '../css/index.css';
import templates from './templates/index';
import constants from './constants/view_const';
import utils from './utils/index';

export default class View {
  constructor(controller) {
    this.controller = controller;
  }

  init() {
    constants.headerElm.innerHTML = templates.headerTpl();
    utils.backgroundAnimation();
  }

  changePage(page) {}
}
