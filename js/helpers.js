const x = s => document.querySelector(s);
const X = s => document.querySelectorAll(s);

const get = (key, target) => {
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



export { x, X, get };