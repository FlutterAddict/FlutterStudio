import { init as initDrawer } from './components/drawer';
import { load as loadContent } from './components/content';
import './components/appbar';



const content = [
  { key: 'flutter/0-Welcome', label: 'Welcome to Flutter Studio', active: true },
  { key: 'flutter/1-Why-Flutter', label: 'Why Flutter?' },
  { key: 'flutter/2-Hello-World', label: 'Hello World App' },  
];




initDrawer(content);
loadContent(content[0].key);