type Shades = 100 | 200 | 300 | 400 | 500 | 600 | 700
type Breakpoints = 'mobile' | 'tablet' | 'desktop'
type Colors = 'gray' | 'purple' | 'purpleDark' | 'blue' | 'blueDark' | 'danger'

export type ThemeType = {
  background: string
  colors: {
    [color in Colors]: color extends 'gray'
      ? {
          [shade in Shades]: string
        }
      : string
  }
  breakpoints: {
    [breakpoint in Breakpoints]: string
  }
}
export const theme: ThemeType = {
  background: '#1a1a1a',
  colors: {
    gray: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#808080',
      400: '#333333',
      500: '#262626',
      600: '#1a1a1a',
      700: '#0d0d0d'
    },
    purple: '#8284fa',
    purpleDark: '#5e60ce',
    blue: '#4ea8de',
    blueDark: '#1e6f9f',
    danger: '#e25858'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1268px'
  }
}
