import { x, get } from '../../helpers';



export default {
  init() {
    this.content = x('.js-content-container');
  },
  load(contentKey) {
    get(`${contentKey}.html`, this.content);
  },
};