export type ScreenNames = 
  | 'Profile'
  | 'Centers'
  | 'About'
  | 'Gallery'
  | 'Career'
  | 'Contact'
  | 'company/Terms'
  | 'company/Refund'
  | 'company/Privacy'
  | 'Logout';

export interface NavigationProp {
  navigate: (screen: ScreenNames) => void;
}
