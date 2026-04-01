import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '../components/atoms/Button'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import HomeIcon from '@mui/icons-material/Home'
import MailIcon from '@mui/icons-material/Mail'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          {/* Icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: '50%',
                bgcolor: 'error.lighter',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ErrorOutlineIcon
                sx={{
                  fontSize: 80,
                  color: 'error.main',
                }}
              />
            </Box>
          </Box>

          {/* 404 Text */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '3rem', md: '4rem' },
              mb: 2,
              color: 'text.primary',
            }}
          >
            404
          </Typography>

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Page Not Found
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 1,
              lineHeight: 1.6,
            }}
          >
            Oops! It looks like you&apos;ve wandered off the farm. The page you&apos;re looking for 
            doesn&apos;t exist or may have been moved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 4,
            }}
          >
            Don&apos;t worry, we&apos;ll help you get back on track!
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, mb: 6 }}>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              startIcon={<HomeIcon />}
              sx={{ flex: 1 }}
            >
              Back to Home
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/contact')}
              startIcon={<MailIcon />}
              sx={{ flex: 1 }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Links to popular pages */}
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid', borderTopColor: 'divider' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontWeight: 600 }}>
              Explore Our Farm:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                variant="text"
                onClick={() => navigate('/about')}
                sx={{
                  justifyContent: 'flex-start',
                  color: 'primary.main',
                }}
              >
                Learn About Us
              </Button>
              <Button
                variant="text"
                onClick={() => navigate('/crops')}
                sx={{
                  justifyContent: 'flex-start',
                  color: 'primary.main',
                }}
              >
                View Our Crops
              </Button>
              <Button
                variant="text"
                onClick={() => navigate('/tours')}
                sx={{
                  justifyContent: 'flex-start',
                  color: 'primary.main',
                }}
              >
                Book a Farm Tour
              </Button>
            </Box>
          </Box>

          {/* Easter Egg */}
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 6,
              color: 'text.secondary',
              opacity: 0.6,
            }}
          >
            Fun fact: Even our crows know where everything goes! They just flew away with your page.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFound
