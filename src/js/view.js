import '../css/index.css';
import templates from './templates/index';
import constants from './constants/view_const';

export default class View {
  constructor() {
    
  }

  init() {
    constants.headerElm.innerHTML = templates.headerTpl();
  }

  updateView() {}
}
