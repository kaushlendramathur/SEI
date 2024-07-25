import Profile from './Profile';
import Centers from './Centers';
import About from './About';

const screens = {
  Profile,
  Centers,
  About
};

export type ScreenNames = keyof typeof screens;

export default screens;
