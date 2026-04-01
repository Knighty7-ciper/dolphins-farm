import Card from '../atoms/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { SvgIconComponent } from '@mui/icons-material'
import { alpha, useTheme } from '@mui/material/styles'

interface StatCardProps {
  title: string
  value: string | number
  icon: SvgIconComponent
  color?: 'primary' | 'secondary' | 'success' | 'warning'
  subtitle?: string
}

const StatCard = ({ title, value, icon: Icon, color = 'primary', subtitle }: StatCardProps) => {
  const theme = useTheme()
  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
  }

  return (
    <Card hover>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '0.75rem',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: subtitle ? 0.5 : 0,
              }}
            >
              {value}
            </Typography>
            {subtitle && (
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {subtitle}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 3,
              backgroundColor: alpha(colors[color], 0.12),
              color: colors[color],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ fontSize: 28 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default StatCard
