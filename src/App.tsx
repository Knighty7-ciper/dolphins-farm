import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from './components/organisms/AppBar'
import Sidebar from './components/organisms/Sidebar'
import Home from './pages/Home'
import Crops from './pages/Crops'
import Tours from './pages/Tours'

const DRAWER_WIDTH = 280

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar drawerWidth={DRAWER_WIDTH} />
        <Sidebar drawerWidth={DRAWER_WIDTH} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            minHeight: '100vh',
            pt: 8,
            px: { xs: 2, sm: 3, md: 4 },
            pb: 4,
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/tours" element={<Tours />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
