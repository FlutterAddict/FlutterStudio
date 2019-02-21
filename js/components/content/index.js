import { x, get, getWidth } from '../../helpers';
import { setVisibility } from '../drawer';



const themes = [
  ['#0F111A','#FAFAFA'],
  ['#FAFAFA','#222222'],
]



let theme = 0;
let contentContainer = x('.js-content-container');
let contentParent = x('.js-content-parent');



const toggleTheme = () => {
  theme += 1;
  theme = theme == themes.length ? 0 : theme;
  contentParent.style.background = themes[theme][0];
  contentParent.style.color = themes[theme][1];
};



contentParent.addEventListener('click', ()=>setVisibility(getWidth()>920));



const load = contentKey => get(`docs/${contentKey}.html`, contentContainer);



export {
  load,
  toggleTheme
};