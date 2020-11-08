/* eslint-disable class-methods-use-this */

import '../css/index.css';
import templates from './templates/index';
import constants from './constants/view_const';
import utils from './utils/index';

const testPortfolio = [
  {
    image: '',
    title: 'Test Project',
    description: 'test project description',
    techList: ['html', 'css', 'javascript', 'webpack', 'eslint', 'eslint', 'eslint', 'eslint', 'eslint'],
    demoLink: 'https://google.com/',
    sourceLink: 'https://github.com/',
  },
  {
    image: '',
    title: 'Test Project',
    description: 'test project description',
    techList: ['html', 'css', 'javascript', 'webpack', 'eslint'],
    demoLink: 'https://google.com/',
    sourceLink: 'https://github.com/',
  },
  {
    image: '',
    title: 'Test Project',
    description: 'test project description',
    techList: ['html', 'css', 'javascript', 'webpack', 'eslint'],
    demoLink: 'https://google.com/',
    sourceLink: 'https://github.com/',
  },
  {
    image: '',
    title: 'Test Project',
    description: 'test project description',
    techList: ['html', 'css', 'javascript', 'webpack', 'eslint'],
    demoLink: 'https://google.com/',
    sourceLink: 'https://github.com/',
  },
  {
    image: '',
    title: 'Test Project',
    description: 'test project description',
    techList: ['html', 'css', 'javascript', 'webpack', 'eslint'],
    demoLink: 'https://google.com/',
    sourceLink: 'https://github.com/',
  },
  {
    image: '',
    title: 'Test Project',
    description: 'test project description',
    techList: ['html', 'css', 'javascript', 'webpack', 'eslint'],
    demoLink: 'https://google.com/',
    sourceLink: 'https://github.com/',
  },
  {
    image: '',
    title: 'Test Project',
    description: 'test project description',
    techList: ['html', 'css', 'javascript', 'webpack', 'eslint'],
    demoLink: 'https://google.com/',
    sourceLink: 'https://github.com/',
  },
];

export default class View {
  constructor(controller) {
    this.controller = controller;
  }

  init() {
    constants.headerElm.innerHTML = templates.headerTpl();
    utils.backgroundAnimation();
  }

  changePage(page, data) {
    data = testPortfolio;
    constants.mainElm.innerHTML = templates[`${page}PageTpl`](data);
    utils.activateLink(page);
  }
}
