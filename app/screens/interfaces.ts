export type ScreenNames = 
  | 'Profile'
  | 'Centers'
  | 'About'
  | 'Gallery'
  | 'Career'
  | 'Contact'
  | 'Terms'
  | 'Refund'
  | 'Privacy'
  | 'Logout';

export interface NavigationProp {
  navigate: (screen: ScreenNames) => void;
}
