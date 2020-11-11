/* global window */

export default function () {
  const testFunc = () => {console.log('test click 1'); };

  window.addEventListener('click', testFunc);

  return () => window.removeEventListener('click', testFunc);
}
