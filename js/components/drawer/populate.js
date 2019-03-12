import { _x } from '../../helpers';



const handleAccordionTap = e => {
  let head = e.path.find(el => el.classList && el.classList.contains('Accordion-head'));
  let body = head.parentElement.querySelector('.Accordion-body');
  let icon = head.querySelector('.js-drop-icon');
  const expanded = icon.getAttribute('name') == 'arrow-dropup';
  const iconName = expanded ? 'arrow-dropdown' : 'arrow-dropup';
  const display = expanded ? 'none' : 'block';
  icon.setAttribute('name', iconName);
  body.style.display = display;
};



export default (drawer, data, onDrawerItemClick) => {
  drawer.innerHTML = '';
  let items = [];

  let accordions = Object.keys(data);

  accordions.map(acc => {
    let accordion = _x('div');
    accordion.classList.add('Accordion');
    let head = _x('div');
    head.classList.add('Accordion-head');
    head.addEventListener('click', handleAccordionTap);
    let body = _x('div');
    body.classList.add('Accordion-body');
    accordion.appendChild(head);
    accordion.appendChild(body);
    head.innerText = acc;
    let icon = _x('ion-icon');
    icon.classList.add('js-drop-icon');
    icon.setAttribute('name', 'arrow-dropup');
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