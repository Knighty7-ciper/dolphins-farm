import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from './components/organisms/AppBar'
import Sidebar from './components/organisms/Sidebar'
import Footer from './components/organisms/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Crops from './pages/Crops'
import Tours from './pages/Tours'
import NotFound from './pages/NotFound'

const DRAWER_WIDTH = 280

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar drawerWidth={DRAWER_WIDTH} />
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Sidebar drawerWidth={DRAWER_WIDTH} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              pt: 8,
              px: { xs: 2, sm: 3, md: 4 },
              pb: 4,
              width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Router>
  )
}

export default App
