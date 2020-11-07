/* global document */

export default function (page) {
  document.querySelectorAll('.nav__link').forEach((element) => element.classList.remove('active'));
  document.querySelector(`[href="#${page}"]`).classList.add('active');
}