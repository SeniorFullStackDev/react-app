import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000'
      // light: "#fff",
      // dark: "#fff",
    },
    secondary: {
      main: '#000000'
      // contrastText: "#000",
      // light: "#fff",
      // dark: "#fff",
    },
    info: {
      main: '#000000',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontFamily: [
      "'Slabo 13px'",
      'serif'
    ].join(',')
  }
})

export default theme
