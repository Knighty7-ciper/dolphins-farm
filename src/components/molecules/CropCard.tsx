import Card from '../atoms/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '../atoms/Button'

interface CropCardProps {
  name: string
  category: string
  description: string
  image: string
  season: string
  price: string
  organic?: boolean
}

const CropCard = ({ name, category, description, image, season, price, organic = false }: CropCardProps) => {
  return (
    <Card hover sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{
          objectFit: 'cover',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.7rem' }}>
              {category}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 0.5 }}>
              {name}
            </Typography>
          </Box>
          {organic && (
            <Chip
              label="Organic"
              color="success"
              size="small"
              sx={{ fontWeight: 600, borderRadius: 1.5 }}
            />
          )}
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip
            label={season}
            variant="outlined"
            size="small"
            sx={{ borderRadius: 1.5 }}
          />
          <Chip
            label={price}
            color="primary"
            size="small"
            sx={{ fontWeight: 600, borderRadius: 1.5 }}
          />
        </Box>

        <Button variant="outlined" fullWidth size="small">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default CropCard
