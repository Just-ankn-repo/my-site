/* eslint-disable class-methods-use-this */

import '../css/index.css';
import templates from './templates/index';
import listeners from './listeners/index';
import constants from './constants/view_const';
import utils from './utils/index';

const generatePortfolio = (count) => {
  const newArray = [];
  for (let i = 0; i < count; i += 1) {
    newArray.push({
      image: `./assets/img/project${i}.jpg`,
      title: `Test Project ${i}`,
      shortDescription: `Test project ${i} description`,
      tags: ['html', 'css', 'javascript'],
      demoLink: 'https://google.com/',
      sourceLink: 'https://github.com/',
    });
  }
  return newArray;
};

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.removeListeners = () => {};
  }

  init() {
    constants.headerElm.innerHTML = templates.headerTpl();
    utils.backgroundAnimation();
  }

  changePage(page, data) {
    data = generatePortfolio(18);
    this.removeListeners();
    constants.mainElm.innerHTML = templates[`${page}PageTpl`](data);
    this.removeListeners = listeners[`${page}Listener`]();
    utils.activateLink(page);
  }
}
