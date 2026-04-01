import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Button from '../components/atoms/Button'
import Hero from '../components/organisms/Hero'
import StatCard from '../components/molecules/StatCard'
import Card from '../components/atoms/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import GroupsIcon from '@mui/icons-material/Groups'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import NatureIcon from '@mui/icons-material/Nature'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const stats = [
  { title: 'Active Crops', value: '24', icon: AgricultureIcon, color: 'success' as const, subtitle: '8 varieties' },
  { title: 'Visitors This Year', value: '12.5K', icon: GroupsIcon, color: 'primary' as const, subtitle: '+23% from last year' },
  { title: 'Sustainability Score', value: '98%', icon: TrendingUpIcon, color: 'secondary' as const, subtitle: 'Top 5% nationally' },
  { title: 'Acres Cultivated', value: '150', icon: NatureIcon, color: 'warning' as const, subtitle: '100% organic' },
]

const recentCrops = [
  {
    name: 'Heirloom Tomatoes',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400',
    description: 'Sweet and juicy heritage varieties',
    price: '$4.99/lb',
  },
  {
    name: 'Sweet Corn',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400',
    description: 'Non-GMO, picked daily at peak sweetness',
    price: '$0.50/ear',
  },
  {
    name: 'Organic Kale',
    image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=400',
    description: 'Nutrient-dense superfood greens',
    price: '$3.99/bunch',
  },
]

const Home = () => {
  return (
    <Box>
      <Hero />

      {/* Stats Section */}
      <Container maxWidth="xl" sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <StatCard {...stat} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Crops Section */}
      <Container maxWidth="xl" sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
              Featured Crops
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Fresh from our fields to your table
            </Typography>
          </Box>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            View All
          </Button>
        </Box>

        <Grid container spacing={3}>
          {recentCrops.map((crop, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card hover>
                <CardMedia
                  component="img"
                  height="180"
                  image={crop.image}
                  alt={crop.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {crop.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {crop.description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                    {crop.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="xl">
        <Box
          sx={{
            background: 'linear-gradient(135deg, #EA4335 0%, #FBBC05 100%)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
            }}
          />

          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, position: 'relative' }}>
            Ready to Visit Our Farm?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
            Book a guided tour and experience sustainable farming firsthand.
            Perfect for families, schools, and food enthusiasts.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'secondary.main',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
              fontWeight: 600,
              px: 4,
            }}
          >
            Schedule a Tour
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
