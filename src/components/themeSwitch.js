/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import {useEffect} from 'react'

const ThemeSwitch = props => {
  const [ mode, setMode ] = useColorMode()

  useEffect(() => {  
    if (mode === 'light') {
      document.body.classList.add('light-theme')
    } else {
      document.body.classList.remove('light-theme')
    }
  }, [mode])

  const label = mode === 'dark' ? '🌞' : '🌛'

  return (
    <button
      {...props}
      sx={{
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'text',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        px: 2, 
        py: 1,
        cursor: 'pointer',
        borderRadius: '4px'
      }}
      onClick={e => {
        const next = mode === 'dark' ? 'light' : 'dark'
        setMode(next)
      }}
    >{label}</button>
  )
}


export default ThemeSwitch
