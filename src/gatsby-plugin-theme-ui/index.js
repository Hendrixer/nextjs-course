import { dark } from '@theme-ui/presets'
import { toTheme } from '@theme-ui/typography'
import funstonTheme from 'typography-theme-funston'
import merge from 'deepmerge'

const darkMode = {
  background: '#121212',
  muted: '#212121',
  surface: 'rgb(25, 25, 25)',
  surface2: 'rgb(30, 30, 30)',
  primary: '#FF1744',
  secondary: '#17ffd1',
  text: 'rgba(255, 255, 255, 0.82)',
  bright: 'white',
}

const colors = {
  ...dark.colors,
  ...darkMode,
  modes: {
    dark: darkMode,
    light: {
      text: '#121212',
      background: '#efefef',
      surface: 'white',
      surface2: 'white',
      bright: 'black',
      muted: 'rgba(0,0,0,0.12)',
      primary: '#B39DDB',
      secondary: '#E91E63'
    }
  }
}

const theme = merge(toTheme(funstonTheme), {
  ...dark,
  useColorSchemeMediaQuery: true,
  useBodyStyles: true,
  colors,
  buttons: {
    lesson: {
      variant: 'containers.suface',
      px: 2,
      py: 1,
      color: 'bright',
      bg: 'primary',
      borderRadius: '4px',
      textDecoration: 'none !important'
    }
  },
  containers: {
    page: {
      width: '100vw',
      maxWidth: '960px',
      my: 0,
      mx: 'auto',
    },
    surface: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    surface2: {
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    }
  },
  styles: {
    ...dark,
    colors,
    root: {
      ...dark.root,
      
      a: {
        textDecoration: 'none',
        color: 'secondary',
        fontWeight: 'bold',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      'h1,h2,h3,h4,h5,h6': {
        color: 'bright',
        my: '25px',
      },
      p: {
        my: '15px',
      },
      blockquote: {
        p: 2,
        color: 'text',
        borderLeft: '.25em solid',
        borderColor: 'primary',
        m: 0,
        my: 1,
        bg: 'background',
      },
      'blockquote p':{
        margin: 0,
        fontStyle: 'italic',
      },
      img: {
        bg: 'background'
      },
      'li p': {
        margin: 0
      },
      li: {
        my: 2
      }
    }
  }
})

console.log(theme)

export default theme
