import { NavLink, useLocation } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { SvgIconComponent } from '@mui/icons-material'
import { alpha, useTheme } from '@mui/material/styles'

interface NavItemProps {
  to: string
  icon: SvgIconComponent
  label: string
  onClick?: () => void
}

const NavItem = ({ to, icon: Icon, label, onClick }: NavItemProps) => {
  const location = useLocation()
  const theme = useTheme()
  const isActive = location.pathname === to

  return (
    <ListItem disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton
        component={NavLink}
        to={to}
        onClick={onClick}
        sx={{
          borderRadius: 3,
          mx: 1,
          py: 1.2,
          backgroundColor: isActive ? alpha(theme.palette.primary.main, 0.12) : 'transparent',
          color: isActive ? 'primary.main' : 'text.secondary',
          '&:hover': {
            backgroundColor: isActive
              ? alpha(theme.palette.primary.main, 0.18)
              : alpha(theme.palette.primary.main, 0.06),
          },
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&::before': isActive ? {
            content: '""',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 4,
            height: '60%',
            backgroundColor: 'primary.main',
            borderRadius: '0 4px 4px 0',
          } : {},
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
            color: isActive ? 'primary.main' : 'text.secondary',
            transition: 'color 0.2s ease-in-out',
          }}
        >
          <Icon sx={{ fontSize: 22 }} />
        </ListItemIcon>
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            fontWeight: isActive ? 600 : 500,
            fontSize: '0.9375rem',
          }}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default NavItem
