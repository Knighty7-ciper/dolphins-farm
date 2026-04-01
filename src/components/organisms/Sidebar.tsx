import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'
import HomeIcon from '@mui/icons-material/Home'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import TourIcon from '@mui/icons-material/Tour'
import CloseIcon from '@mui/icons-material/Close'
import Logo from '../atoms/Logo'
import NavItem from '../molecules/NavItem'

interface SidebarProps {
  drawerWidth: number
}

const navigationItems = [
  { to: '/', icon: HomeIcon, label: 'Home' },
  { to: '/crops', icon: AgricultureIcon, label: 'Crops' },
  { to: '/tours', icon: TourIcon, label: 'Tours' },
]

const Sidebar = ({ drawerWidth }: SidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo size="medium" />
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ ml: 1 }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ mx: 2, opacity: 0.6 }} />

      <List sx={{ px: 1, py: 2, flexGrow: 1 }}>
        {navigationItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            onClick={isMobile ? handleDrawerToggle : undefined}
          />
        ))}
      </List>

      <Box sx={{ p: 3, mt: 'auto' }}>
        <Box
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Dolphins Farm
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.9 }}>
            Est. 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: 'background.paper',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: 'background.paper',
              borderRight: 'none',
              boxShadow: '2px 0 8px rgba(0,0,0,0.04)',
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
