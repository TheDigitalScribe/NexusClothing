import localFont from 'next/font/local'

export const openSans = localFont({
  src: [
    {
      path: './OpenSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './OpenSans-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './OpenSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './OpenSans-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './OpenSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './OpenSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './OpenSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './OpenSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './OpenSans-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    }
  ],
  variable: '--font-opensans',
  display: 'swap',
});
