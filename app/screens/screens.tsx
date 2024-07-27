import Profile from './Profile';
import Centers from './Centers';
import About from './About';
import Gallery from './Gallery';
import Career from './Career';
import Contact from './Contact';
import Terms from './Terms';
import Refund from './Refund';
import Privacy from './Privacy';
import Logout from './Logout';

const screens = {
  Profile,
  Centers,
  About,
  Gallery,
  Career,
  Contact,
  Terms,
  Refund,
  Privacy,
  Logout
};

export type ScreenNames = keyof typeof screens;

export default screens;
