// src/assets/images/index.ts
export type ImageNames = 'image1' | 'image2' | 'image3' | 'image4' | 'image5' | 'image6' | 'image7';

export const images: Record<ImageNames, any> = {
  image1: require('@/assets/images/Gallary/1.jpg'),
  image2: require('@/assets/images/Gallary/2.jpg'),
  image3: require('@/assets/images/Gallary/3.jpg'),
  image4: require('@/assets/images/Gallary/4.jpg'),
  image5: require('@/assets/images/Gallary/5.jpg'),
  image6: require('@/assets/images/Gallary/6.jpg'),
  image7: require('@/assets/images/Gallary/7.jpg'),
};
