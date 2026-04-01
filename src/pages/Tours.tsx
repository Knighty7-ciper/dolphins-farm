import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Card from '../components/atoms/Card'
import CardContent from '@mui/material/CardContent'
import PageLayout from '../components/templates/PageLayout'
import TourCard from '../components/molecules/TourCard'
import Button from '../components/atoms/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ScheduleIcon from '@mui/icons-material/Schedule'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'

const tours = [
  {
    title: 'Family Farm Experience',
    description: 'A fun, educational tour perfect for families with children. Feed the animals, pick seasonal produce, and learn about farm life through interactive activities.',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400',
    duration: '2 hours',
    maxPeople: 15,
    rating: 4.8,
    price: '$25/person',
    featured: true,
  },
  {
    title: 'Sunrise Harvest Tour',
    description: 'Join our farmers at dawn for the morning harvest. Experience the tranquility of the farm at sunrise and take home fresh-picked produce.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400',
    duration: '3 hours',
    maxPeople: 8,
    rating: 4.9,
    price: '$45/person',
    featured: false,
  },
  {
    title: 'Organic Farming Workshop',
    description: 'Deep dive into sustainable agriculture practices. Learn composting, companion planting, and natural pest management from our expert farmers.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400',
    duration: '4 hours',
    maxPeople: 12,
    rating: 4.7,
    price: '$65/person',
    featured: false,
  },
  {
    title: 'Farm-to-Table Dinner',
    description: 'An evening culinary experience featuring a 5-course meal prepared with ingredients harvested that day. Includes wine pairing and farm tour.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400',
    duration: '5 hours',
    maxPeople: 20,
    rating: 5.0,
    price: '$120/person',
    featured: true,
  },
  {
    title: 'School Field Trip',
    description: 'Educational tour designed for students. Covers plant biology, sustainable agriculture, and healthy eating. Includes hands-on activities.',
    image: 'https://images.unsplash.com/photo-1595841055906-bd1b5ce2d95c?auto=format&fit=crop&w=400',
    duration: '2.5 hours',
    maxPeople: 30,
    rating: 4.6,
    price: '$12/student',
    featured: false,
  },
  {
    title: 'Photography Walk',
    description: 'Guided tour through our most scenic areas. Perfect for photographers and nature lovers. Best lighting times at golden hour.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400',
    duration: '2 hours',
    maxPeople: 10,
    rating: 4.8,
    price: '$35/person',
    featured: false,
  },
]

const benefits = [
  'Guided tour with experienced farmers',
  'Fresh seasonal produce samples',
  'Photo opportunities throughout the farm',
  'Complimentary refreshments',
  '10% discount at our farm store',
  'Free parking included',
]

const Tours = () => {
  return (
    <PageLayout
      title="Farm Tours"
      subtitle="Immerse yourself in the world of sustainable agriculture. Our guided tours offer unique experiences for visitors of all ages."
    >
      {/* Featured Tours */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          {tours.map((tour, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <TourCard {...tour} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Info Section */}
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                What's Included
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {benefits.map((benefit, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      mb: 2,
                      color: 'text.secondary',
                    }}
                  >
                    <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                    <Typography variant="body1">{benefit}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
                Booking Information
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <ScheduleIcon sx={{ color: 'rgba(255,255,255,0.8)' }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Operating Hours
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                      Tuesday - Sunday: 9:00 AM - 5:00 PM
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <LocationOnIcon sx={{ color: 'rgba(255,255,255,0.8)' }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Location
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                      123 Country Road, Green Valley, CA 90210
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <PhoneIcon sx={{ color: 'rgba(255,255,255,0.8)' }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Reservations
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                      (555) 123-4567
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                  fontWeight: 600,
                }}
              >
                Contact Us to Book
              </Button>

              <Typography variant="caption" sx={{ display: 'block', mt: 2, textAlign: 'center', opacity: 0.8 }}>
                Advance booking recommended. Walk-ins welcome based on availability.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default Tours
