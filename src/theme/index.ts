import { createTheme } from '@mui/material/styles'
import { red, blue, green, yellow } from '@mui/material/colors'

// Google Material Design 3 Colors
const GOOGLE_BLUE = '#4285F4'
const GOOGLE_RED = '#EA4335'
const GOOGLE_GREEN = '#34A853'
const GOOGLE_YELLOW = '#FBBC05'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: GOOGLE_BLUE,
      light: '#80B4FF',
      dark: '#1967D2',
      contrastText: '#fff',
    },
    secondary: {
      main: GOOGLE_RED,
      light: '#FF8A80',
      dark: '#C5221F',
      contrastText: '#fff',
    },
    success: {
      main: GOOGLE_GREEN,
      light: '#81C995',
      dark: '#1E8E3E',
      contrastText: '#fff',
    },
    warning: {
      main: GOOGLE_YELLOW,
      light: '#FDE293',
      dark: '#F9AB00',
      contrastText: '#000',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.0075em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '8px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
          boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
        },
      },
    },
  },
})

export default theme
