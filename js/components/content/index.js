import { x, get, getWidth } from '../../helpers';
import { setVisibility } from '../drawer';



let contentContainer = x('.js-content-container');
let contentParent = x('.js-content-parent');



contentParent.addEventListener('click', () => {
  setVisibility(getWidth() > 920);
});



export default contentKey => get(`docs/${contentKey}.html`, contentContainer);