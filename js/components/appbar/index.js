import { x } from '../../helpers';
import { toggleTheme } from '../content';



const githubLink = 'https://github.com/FlutterAddict/FlutterStudio';
const themeToggler = x('.js-theme-toggler');
const githubRedirector = x('.js-github-redirector');



themeToggler.addEventListener('click', toggleTheme);
githubRedirector.addEventListener('click', () => window.location.href = githubLink);