import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Button from '../atoms/Button'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderTopColor: 'divider',
        mt: 'auto',
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* About Section */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              About Dolphins Farm
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
              A sustainable farming operation committed to organic practices and community education. Visit us to learn about modern agricultural techniques.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main', bgcolor: 'action.hover' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                size="small"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main', bgcolor: 'action.hover' },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size="small"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main', bgcolor: 'action.hover' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="small"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main', bgcolor: 'action.hover' },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="/"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                Home
              </Link>
              <Link
                href="/crops"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                Crops
              </Link>
              <Link
                href="/tours"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                Tours
              </Link>
              <Link
                href="/about"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                About
              </Link>
              <Link
                href="/contact"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Legal Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  fontSize: '0.875rem',
                }}
              >
                Cookie Policy
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  123 Farm Road, Rural County, State 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <PhoneIcon sx={{ color: 'primary.main', flexShrink: 0 }} />
                <Link
                  href="tel:+15551234567"
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    fontSize: '0.875rem',
                  }}
                >
                  +1 (555) 123-4567
                </Link>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <EmailIcon sx={{ color: 'primary.main', flexShrink: 0 }} />
                <Link
                  href="mailto:info@dolphinsfarm.com"
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    fontSize: '0.875rem',
                  }}
                >
                  info@dolphinsfarm.com
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Newsletter Signup Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 2,
            p: 4,
            mb: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 2.5, maxWidth: 400, mx: 'auto' }}>
            Get updates on new crops, farm tours, and sustainable farming tips delivered to your inbox.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{
              display: 'flex',
              gap: 1,
              maxWidth: 500,
              mx: 'auto',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <TextField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="small"
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'primary.contrastText',
                  color: 'text.primary',
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: 'primary.contrastText',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'none',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
          {subscribed && (
            <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.9 }}>
              Thank you for subscribing!
            </Typography>
          )}
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid',
            borderTopColor: 'divider',
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2024 Dolphins Farm. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Made with care for sustainable agriculture
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
