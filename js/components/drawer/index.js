import { x, _x, getWidth } from '../../helpers';
import populateDrawer from './populate';
import { load } from '../content';
import './swipe';



const init = data => {
  items = populateDrawer(drawerInner, data, onDrawerItemClick);
};

const onDrawerItemClick = item => {
  activate(item);
  load(item.dataset.contentKey);
};

const activate = item => {
  deactivateAllItems();
  item.classList.add('Drawer-item--active');
  if (getWidth() < 920) {
    setVisibility(false);
  }
};

const deactivateAllItems = () => {
  items.forEach(item => item.classList.remove('Drawer-item--active'));
};

const setVisibility = visibility => drawer.style.display = visibility ? 'block' : 'none';



let burger = x('.js-burger');
let drawer = x('.js-drawer');
let drawerInner = x('.js-drawer-inner');
let items = [];



setVisibility(getWidth()>920);
window.addEventListener('resize', () => setVisibility(getWidth()>920));
burger.addEventListener('click', () => setVisibility(drawer.style.display != 'block'));



export { init, setVisibility };