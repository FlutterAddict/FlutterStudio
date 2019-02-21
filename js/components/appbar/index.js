import { x } from '../../helpers';
import { toggleTheme } from '../content';



let themeToggler = x('.js-theme-toggler');
themeToggler.addEventListener('click', toggleTheme);