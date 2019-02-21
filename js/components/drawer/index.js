import { x, _x, getWidth } from '../../helpers';
import populateDrawer from './populate';
import { 
  load as loadContent, 
  setVisibility as setContentVisibility
} from '../content';



const initialize = data => {
  items = populateDrawer(drawer, data, onDrawerItemClick);
};

const onDrawerItemClick = item => {
  activate(item);
  loadContent(item.dataset.contentKey);
};

const activate = item => {
  deactivateAllItems();
  item.classList.add('Drawer-item--active');
  setVisibility(false);
};

const deactivateAllItems = () => {
  items.forEach(item => item.classList.remove('Drawer-item--active'));
};

const setVisibility = visibility => drawer.style.display = visibility ? 'block' : 'none';



let burger = x('.js-burger');
let drawer = x('.js-drawer');
let items = [];
setVisibility(getWidth()>920);



window.addEventListener('resize', () => {
  setVisibility(getWidth() > 920);
  setContentVisibility(true);
});

burger.addEventListener('click', () => {
  if (drawer.style.display == 'block') {
    setVisibility(false);
    setContentVisibility(true);
  } else {
    setVisibility(true);
    setContentVisibility(false);
  };
});



export default data => initialize(data);