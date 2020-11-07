/* global document, window */
import constants from './constants/router_const';

export default class Router {
  constructor(controller) {
    this.controller = controller;
  }

  init() {
    const matchRoute = constants.routes.filter((route) => document.location.hash.match(new RegExp(`^#${route}$`)));

    if (matchRoute.length === 0) {
      document.location.hash = `#${constants.defaultRoute}`;
    }

    const route = () => {
      const page = document.location.hash.slice(1);
      this.controller.setPage(page);
    };

    window.addEventListener('load', () => route());
    window.addEventListener('hashchange', () => route());
  }
}
