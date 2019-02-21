const x = s => document.querySelector(s);
const X = s => document.querySelectorAll(s);
const _x = s => document.createElement(s);

const get = (key, target, placeholderHTML='') => {
  target.innerHTML = placeholderHTML;
  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        target.innerHTML = request.responseText;
      }
    }
  }
  request.open('GET', key);
  request.send();
};

const getWidth = () => {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};


export { x, X, get, _x, getWidth };