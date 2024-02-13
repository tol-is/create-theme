import { createTheme } from './lib'

export const theme = createTheme({
  breakpoints: {
    _: 0,
    xs: 375,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1440,
    '3xl': 1600,
    '4xl': 1920,
  },
  
  color: {
    transparent: 'transparent',
    current: 'currentColor',
    inherit: 'inherit',
    white: '#ffffff',
    black: '#000000',
    neutral: {
        0: '#ffffff',
        10: '#F6F7F8',
        20: '#DFE0E1',
        30: '#BDC1C5',
        40: '#A1A8AF',
        50: '#8C9198',
        60: '#676D75',
        70: '#50565E',
        80: '#3B4047',
        90: '#262A30',
        100: '#191919',
      },
    }
})


theme('color.neutral.20')