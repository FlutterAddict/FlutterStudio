import { _x } from '../../helpers';



export default (drawer, data, onDrawerItemClick) => {
  drawer.innerHTML = '';
  let items = [];

  let accordions = Object.keys(data);

  accordions.map(acc => {
    let accordion = _x('div');
    accordion.classList.add('Accordion');
    let head = _x('div');
    head.classList.add('Accordion-head');
    let body = _x('div');
    body.classList.add('Accordion-body');
    accordion.appendChild(head);
    accordion.appendChild(body);
    head.innerText = acc;
    let icon = _x('ion-icon');
    icon.setAttribute('name', 'arrow-dropdown');
    head.appendChild(icon);

    data[acc].map(item => {
      let div = _x('div');
      div.classList.add('Drawer-item', 'Accordion-child-1', 'js-drawer-item');
      if (item.active) { div.classList.add('Drawer-item--active'); };
      div.setAttribute('data-content-key', item.key);
      div.innerText = item.label;
      div.addEventListener('click', () => onDrawerItemClick(div));
      items.push(div);
      body.appendChild(div);
    });

    drawer.appendChild(accordion);
  });
  
  return items;
};