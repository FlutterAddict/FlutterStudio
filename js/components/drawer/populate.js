import { _x } from '../../helpers';



const tagsAvailable = ['app', 'program', 'game'];



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

const buildAccordion = (accordionName, data, onDrawerItemClick) => {

  const _buildAccordion = (name, nestedLevel = 1) => {
    let accordion = _x('div');
    accordion.classList.add('Accordion');
    let head = _x('div');
    head.classList.add('Accordion-head', `Accordion-head--${nestedLevel}`);
    head.addEventListener('click', handleAccordionTap);
    let body = _x('div');
    body.classList.add('Accordion-body');
    accordion.appendChild(head);
    accordion.appendChild(body);
    head.innerText = name;
    let icon = _x('ion-icon');
    icon.classList.add('js-drop-icon');
    icon.setAttribute('name', 'arrow-dropup');
    head.appendChild(icon);
    return {
      element: accordion,
      body: body
    };
  };

  const populateAccordionBody = (body, arr, nestingLevel=1) => {
    arr.map(item => {
      let div = _x('div');
      div.classList.add('Drawer-item', `Accordion-child-${nestingLevel}`, 'js-drawer-item');
      if (item.active) { div.classList.add('Drawer-item--active'); };
      div.setAttribute('data-content-key', item.key);
      div.innerText = `• ${item.label}`;
      if (item.tags) {
        item.tags.forEach(tagName => {
          if (tagsAvailable.indexOf(tagName) >= 0) {
            let tag = _x('div');
            tag.classList.add('Tag', `Tag--${tagName}`);
            tag.innerText = tagName;
            div.appendChild(tag);
          }
        });
      }
      div.addEventListener('click', () => onDrawerItemClick(div));
      body.appendChild(div); 
    });
  };

  const buildNestedAccordion = (body, item) => {
    let nestedAccordionsNames = Object.keys(item);
    nestedAccordionsNames.map(nestedAccordionName => {
      let nestedAccordion = _buildAccordion(nestedAccordionName, 2);
      populateAccordionBody(nestedAccordion.body, item[nestedAccordionName], 2);
      body.appendChild(nestedAccordion.element);
    });
  };

  let accordion = _buildAccordion(accordionName);

  if (Array.isArray(data)) {
    populateAccordionBody(accordion.body, data);
  } else {
    buildNestedAccordion(accordion.body, data);
  }

  return accordion.element;
};



export default (drawer, data, onDrawerItemClick) => {
  drawer.innerHTML = '';

  let accordions = Object.keys(data);

  accordions.map(acc => {
    let accordion = buildAccordion(acc, data[acc], onDrawerItemClick);
    drawer.appendChild(accordion);
  });
};