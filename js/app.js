import { init as drawer } from './components/drawer';
import { load } from './components/content';
import './components/appbar';



drawer([
  { key: 'whats-flutter-studio', label: 'What is Flutter Studio?', active: true },
  { key: 'why-flutter', label: 'Why Flutter?' },  
]);

load('whats-flutter-studio');