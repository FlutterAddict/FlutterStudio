import { X } from '../../helpers';
import content from '../content';



export default {
  init() {
    this.getDOM();
    this.bindEvents();
  },
  getDOM() {
    this.items = X('.js-drawer-item');
  },
  bindEvents() {
    this.items.forEach(item => item.addEventListener('click', () => this.onClick(item)));
  },
  onClick(item) {
    this.activateItem(item);
    content.load(item.dataset.contentKey);
  },
  activateItem(item) {
    this.deactivateAll();
    item.classList.add('Drawer-item--active');    
  },
  deactivateAll() {
    this.items.forEach(item => {
      item.classList.remove('Drawer-item--active');
    });
  },
};