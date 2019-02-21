import { x, get } from '../../helpers';



let contentContainer = x('.js-content-container');



let visible = true;
let setVisibility = visibility => {
  visible = visibility;
  let newVisibilityStyle = visible ? 'block' : 'none';
  contentContainer.style.display = newVisibilityStyle;
};



const load = contentKey => get(`docs/${contentKey}.html`, contentContainer);



export { visible, load, setVisibility };