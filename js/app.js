import { init as drawer } from './components/drawer';
import { load } from './components/content';
import './components/appbar';



drawer([
  { key: 'flutter/features', label: 'Flutter Features', active: true },
  { key: 'flutter/ui-basics', label: 'User Interface Basics' },
]);



load('flutter/features');