import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '../components/atoms/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '../components/atoms/Button';

// MUI Icons - All these exist in @mui/icons-material
import EcoIcon from '@mui/icons-material/Eco';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About = () => {
  const values = [
    {
      icon: EcoIcon,
      title: 'Sustainability',
      description: 'We practice organic farming methods that preserve soil health and protect the environment for future generations.',
      color: 'success' as const,
    },
    {
      icon: PeopleIcon,
      title: 'Community',
      description: 'Engaging with local communities through educational tours, workshops, and transparent farming practices.',
      color: 'primary' as const,
    },
    {
      icon: VerifiedIcon,
      title: 'Quality',
      description: 'Every crop is grown with care using only natural fertilizers and sustainable pest management techniques.',
      color: 'secondary' as const,
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Farm Owner & Lead Agronomist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400',
      bio: '15 years of experience in sustainable agriculture',
    },
    {
      name: 'Marcus Williams',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
      bio: 'Expert in crop rotation and soil health',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Education Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
      bio: 'Passionate about farm education and outreach',
    },
    {
      name: 'James Chen',
      role: 'Sustainability Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400',
      bio: 'Leading our environmental initiatives',
    },
  ];

  const milestones = [
    { year: '2010', event: 'Farm established with initial 20 acres' },
    { year: '2014', event: 'Achieved certified organic status' },
    { year: '2018', event: 'Expanded to 150 acres, opened to public tours' },
    { year: '2021', event: 'Launched educational programs for schools' },
    { year: '2023', event: 'Installed renewable energy systems' },
    { year: '2024', event: 'Achieved carbon-neutral operations' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            About Dolphins Farm
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: 600, mx: 'auto' }}>
            A family-owned organic farm dedicated to sustainable agriculture and community education since 2010.
          </Typography>
        </Box>

        {/* Hero Image */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 3,
            mb: 6,
            height: { xs: 300, sm: 400, md: 500 },
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&h=600"
            alt="Dolphins Farm aerial view"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        {/* Story Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Our Story
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
                Founded in 2010, Dolphins Farm started as a small family operation with a vision to prove that sustainable
                agriculture could be both profitable and environmentally responsible. What began with just 20 acres and a
                passionate commitment to organic farming has grown into a thriving 150-acre operation serving thousands of
                families across the region.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
                Our journey has been guided by three core principles: respecting the land, supporting our community, and
                producing the highest quality crops possible. We&apos;ve invested heavily in research and development,
                experimenting with new crop varieties and sustainable farming techniques to maximize yields while minimizing
                environmental impact.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Today, we&apos;re proud to be a certified organic operation with carbon-neutral farming practices. But our
                work isn&apos;t limited to the fields—we&apos;re deeply committed to education, welcoming over 5,000 visitors
                annually for farm tours and workshops.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1625246333333-b0c2c48c8b5d?auto=format&fit=crop&w=500&h=500"
                alt="Farm founder Sarah Johnson"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: 2,
                  objectFit: 'cover',
                  height: { xs: 300, md: 400 },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Values Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8, mb: 8 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Our Core Values
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
              These principles guide every decision we make on the farm.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card hover sx={{ height: '100%' }}>
                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            bgcolor: `${value.color}.lighter`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconComponent sx={{ color: `${value.color}.main`, fontSize: 32 }} />
                        </Box>
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Our Journey
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
            Key milestones in the evolution of Dolphins Farm.
          </Typography>
        </Box>
        <Box>
          {milestones.map((milestone, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: 3,
                mb: 4,
                pb: 4,
                borderBottom: index !== milestones.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
              }}
            >
              <Box sx={{ textAlign: 'center', minWidth: 80 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                >
                  {milestone.year}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {milestone.event}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8, mb: 8 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Meet Our Team
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
              Passionate professionals dedicated to sustainable farming and community engagement.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card hover sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'primary.main', fontWeight: 600, display: 'block', mb: 1 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="xl">
        <Box
          sx={{
            background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
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
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, position: 'relative' }}>
            Join Our Community
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.95, maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
            Ready to experience sustainable farming firsthand? Book a tour or sign up for our workshops.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: 'success.main',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                fontWeight: 600,
                px: 4,
              }}
            >
              Book a Tour
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                fontWeight: 600,
                px: 4,
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
