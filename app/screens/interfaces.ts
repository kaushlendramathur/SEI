export type ScreenNames =  'Profile' | 'About' | 'Centers';

export interface NavigationProp {
  navigate: (screen: ScreenNames) => void;
}
