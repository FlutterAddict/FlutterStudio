import drawer from './components/drawer';
import { load as loadContent } from './components/content';



drawer([
  { key: 'whats-flutter-studio', label: 'What is Flutter Studio?', active: true },
  { key: 'why-flutter', label: 'Why Flutter?' },  
]);

loadContent('whats-flutter-studio');