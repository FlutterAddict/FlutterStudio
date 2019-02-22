import { init as drawer } from './components/drawer';
import { load } from './components/content';
import './components/appbar';



drawer([
  { key: 'flutter/features', label: 'Flutter Features', active: true },
]);



load('flutter/features');