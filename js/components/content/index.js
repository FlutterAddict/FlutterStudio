import { x, X, get, getWidth } from '../../helpers';
import { setVisibility } from '../drawer';



const themes = [
  ['#0F111A','#FAFAFA', '#BBBBBB'],
  ['#FAFAFA','#090B10', '#444444'],
]



let theme = 0;
let contentContainer = x('.js-content-container');
let contentParent = x('.js-content-parent');



const setParagraphsColor = () => {
  let paragraphs = X('p');
  paragraphs.forEach(p => p.style.color = themes[theme][2]);
};

const toggleTheme = () => {
  theme += 1;
  theme = theme == themes.length ? 0 : theme;
  contentParent.style.background = themes[theme][0];
  contentParent.style.color = themes[theme][1];
  setParagraphsColor();
};



contentParent.addEventListener('click', ()=>setVisibility(getWidth()>920));



const load = contentKey => get(`docs/${contentKey}.html`, contentContainer, '', () => {
  Prism.highlightAll();
  setParagraphsColor();
});



export {
  load,
  toggleTheme
};