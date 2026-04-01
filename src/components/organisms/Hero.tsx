import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import CardContent from '@mui/material/CardContent'
import GrassIcon from '@mui/icons-material/Grass'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import VerifiedIcon from '@mui/icons-material/Verified'

const Hero = () => {
  const features = [
    {
      icon: GrassIcon,
      title: '100% Organic',
      description: 'Certified organic farming practices',
      color: 'success',
    },
    {
      icon: LocalShippingIcon,
      title: 'Farm to Table',
      description: 'Direct delivery within 24 hours',
      color: 'primary',
    },
    {
      icon: VerifiedIcon,
      title: 'Quality Assured',
      description: 'Rigorous quality control standards',
      color: 'secondary',
    },
  ]

  return (
    <Box sx={{ mb: 6 }}>
      {/* Main Hero Section */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          mb: 4,
          background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
          minHeight: { xs: '400px', md: '500px' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 6 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  mb: 2,
                  display: 'block',
                }}
              >
                WELCOME TO DOLPHINS FARM
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Growing Nature's<br />Best for You
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.95)',
                  mb: 4,
                  maxWidth: 500,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Experience sustainable agriculture at its finest. We cultivate premium organic crops
                while preserving the environment for future generations.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                    fontWeight: 600,
                  }}
                >
                  Explore Crops
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Book a Tour
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Feature Cards */}
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card hover>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    bgcolor: `${feature.color}.light`,
                    color: `${feature.color}.main`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <feature.icon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Hero
