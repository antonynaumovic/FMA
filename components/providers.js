'use client';
import { Parallax } from 'react-scroll-parallax';

import { ParallaxProvider } from 'react-scroll-parallax';

export function Providers({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}