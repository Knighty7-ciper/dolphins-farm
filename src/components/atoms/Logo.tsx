import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import Box from '@mui/material/Box'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
}

const LeafIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </SvgIcon>
)

const Logo = ({ size = 'medium', showText = true }: LogoProps) => {
  const sizes = {
    small: { icon: 24, font: '1rem' },
    medium: { icon: 32, font: '1.25rem' },
    large: { icon: 48, font: '1.5rem' },
  }

  const { icon, font } = sizes[size]

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LeafIcon
        sx={{
          fontSize: icon,
          color: 'success.main',
          filter: 'drop-shadow(0 2px 4px rgba(52, 168, 83, 0.3))',
        }}
      />
      {showText && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: font,
            background: 'linear-gradient(45deg, #4285F4 30%, #34A853 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
          }}
        >
          Dolphins Farm
        </Typography>
      )}
    </Box>
  )
}

export default Logo
