import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  showBreadcrumbs?: boolean
}

const PageLayout = ({ title, subtitle, children, showBreadcrumbs = true }: PageLayoutProps) => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  const breadcrumbItems = [
    <Link
      key="home"
      component={RouterLink}
      to="/"
      underline="hover"
      color="inherit"
      sx={{ fontWeight: 500 }}
    >
      Home
    </Link>,
    ...pathnames.map((value, index) => {
      const last = index === pathnames.length - 1
      const to = `/${pathnames.slice(0, index + 1).join('/')}`
      const label = value.charAt(0).toUpperCase() + value.slice(1)

      return last ? (
        <Typography key={to} color="text.primary" sx={{ fontWeight: 600 }}>
          {label}
        </Typography>
      ) : (
        <Link
          key={to}
          component={RouterLink}
          to={to}
          underline="hover"
          color="inherit"
          sx={{ fontWeight: 500 }}
        >
          {label}
        </Link>
      )
    }),
  ]

  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      {showBreadcrumbs && (
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          {breadcrumbItems}
        </Breadcrumbs>
      )}

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            mb: subtitle ? 1 : 0,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600 }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box>
        {children}
      </Box>
    </Container>
  )
}

export default PageLayout
