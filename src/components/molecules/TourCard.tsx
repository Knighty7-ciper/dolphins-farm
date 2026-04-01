import Card from '../atoms/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '../atoms/Button'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import StarIcon from '@mui/icons-material/Star'

interface TourCardProps {
  title: string
  description: string
  image: string
  duration: string
  maxPeople: number
  rating: number
  price: string
  featured?: boolean
}

const TourCard = ({
  title,
  description,
  image,
  duration,
  maxPeople,
  rating,
  price,
  featured = false
}: TourCardProps) => {
  return (
    <Card
      hover
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...(featured && {
          border: '2px solid',
          borderColor: 'primary.main',
        }),
      }}
    >
      {featured && (
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
          }}
        >
          <Chip
            label="Featured"
            color="primary"
            size="small"
            sx={{ fontWeight: 700, borderRadius: 1.5 }}
          />
        </Box>
      )}

      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
        sx={{
          objectFit: 'cover',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      />

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
          <StarIcon sx={{ color: 'warning.main', fontSize: 18 }} />
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {rating.toFixed(1)}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            (128 reviews)
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {duration}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PeopleIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Max {maxPeople}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              From
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
              {price}
            </Typography>
          </Box>
          <Button variant="contained" size="small">
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TourCard
