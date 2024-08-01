import { ScreenNames } from '../../types/interfaces';
import AboutIcon from '../../assets/icons/profile-screen/About.svg';
import CentersIcon from '../../assets/icons/profile-screen/Centers.svg';
import GalleryIcon from '../../assets/icons/profile-screen/Gallery.svg';
import CareerIcon from '../../assets/icons/profile-screen/Career.svg';
import ContactIcon from '../../assets/icons/profile-screen/Contact.svg';
import TermsIcon from '../../assets/icons/profile-screen/Terms.svg';
import RefundIcon from '../../assets/icons/profile-screen/Refund.svg';
import PrivacyIcon from '../../assets/icons/profile-screen/Privacy.svg';
import LogoutIcon from '../../assets/icons/profile-screen/Logout.svg';

interface NavigationOption {
  name: ScreenNames;
  displayName: string;
  icon: any;
}

export const navigationOptions: NavigationOption[] = [
  { name: 'About', displayName: 'About Us', icon: AboutIcon },
  { name: 'Centers', displayName: 'Centers', icon: CentersIcon },
  { name: 'Gallery', displayName: 'Gallery', icon: GalleryIcon },
  { name: 'Career', displayName: 'Career', icon: CareerIcon },
  { name: 'Contact', displayName: 'Contact Us', icon: ContactIcon },
  { name: 'Terms', displayName: 'TERMS AND CONDITIONS', icon: TermsIcon },
  { name: 'Refund', displayName: 'REFUND POLICY', icon: RefundIcon },
  { name: 'Privacy', displayName: 'PRIVACY POLICY', icon: PrivacyIcon },
  { name: 'Logout', displayName: 'Log Out', icon: LogoutIcon },
];
