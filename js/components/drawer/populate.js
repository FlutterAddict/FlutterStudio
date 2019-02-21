import { _x } from '../../helpers';



export default (drawer, data, onDrawerItemClick) => {
  let items = [];
  data.map(item => {
    let div = _x('div');
    div.classList.add('Drawer-item', 'js-drawer-item');
    if (item.active) { div.classList.add('Drawer-item--active'); };
    div.setAttribute('data-content-key', item.key);
    div.innerText = item.label;
    div.addEventListener('click', () => onDrawerItemClick(div));
    items.push(div);
    drawer.appendChild(div);
  });
  return items;
};