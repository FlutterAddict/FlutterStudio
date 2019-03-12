import { X } from '../../helpers';
import data from '../../data';
import { init as initDrawer } from '../drawer';
import { load as loadContent } from '../content';



const tabs = X('.js-tab');



const navigateTo = to => {
  initDrawer(data[to]);
  loadContent(data[to][Object.keys(data[to])[0]][0].key);
};



tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    navigateTo(tab.dataset.to);
    tabs.forEach(t => t.classList.remove('AppBar-tab--active', 'Drawer-mobile-item--active'));
    let toActivate = X(`[data-to="${tab.dataset.to}"]`);
    toActivate.forEach(ta => ta.classList.add('AppBar-tab--active', 'Drawer-mobile-item--active'));
  });
});



export default navigateTo;