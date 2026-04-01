import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PageLayout from '../components/templates/PageLayout'
import CropCard from '../components/molecules/CropCard'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`crops-tabpanel-${index}`}
      aria-labelledby={`crops-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  )
}

const crops = [
  {
    name: 'Roma Tomatoes',
    category: 'Vegetables',
    description: 'Meaty, flavorful tomatoes perfect for sauces and canning. Grown without synthetic pesticides.',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400',
    season: 'Summer',
    price: '$3.99/lb',
    organic: true,
  },
  {
    name: 'Bell Peppers',
    category: 'Vegetables',
    description: 'Vibrant, crisp peppers in red, yellow, and orange varieties. High in vitamin C.',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdf5eb2cc3?auto=format&fit=crop&w=400',
    season: 'Summer',
    price: '$2.49/each',
    organic: true,
  },
  {
    name: 'Zucchini',
    category: 'Vegetables',
    description: 'Versatile summer squash, perfect for grilling, baking, or spiralizing into noodles.',
    image: 'https://images.unsplash.com/photo-1578859600788-17a01adf4c56?auto=format&fit=crop&w=400',
    season: 'Summer',
    price: '$1.99/lb',
    organic: true,
  },
  {
    name: 'Butternut Squash',
    category: 'Vegetables',
    description: 'Sweet, nutty winter squash. Excellent for soups, roasting, and pies.',
    image: 'https://images.unsplash.com/photo-1574110537368-132b564ce3bb?auto=format&fit=crop&w=400',
    season: 'Fall',
    price: '$2.99/lb',
    organic: true,
  },
  {
    name: 'Strawberries',
    category: 'Fruits',
    description: 'Sweet, juicy berries picked at peak ripeness. Perfect for fresh eating or desserts.',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400',
    season: 'Spring',
    price: '$5.99/basket',
    organic: true,
  },
  {
    name: 'Blueberries',
    category: 'Fruits',
    description: 'Antioxidant-rich superfood berries. Great for smoothies, baking, or snacking.',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=400',
    season: 'Summer',
    price: '$4.99/pint',
    organic: true,
  },
  {
    name: 'Peaches',
    category: 'Fruits',
    description: 'Juicy, fragrant stone fruit with a perfect balance of sweet and tart.',
    image: 'https://images.unsplash.com/photo-1629753250291-979952613877?auto=format&fit=crop&w=400',
    season: 'Summer',
    price: '$3.49/lb',
    organic: true,
  },
  {
    name: 'Apples - Honeycrisp',
    category: 'Fruits',
    description: 'Crisp, sweet apples with a refreshing tartness. Excellent for eating fresh.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400',
    season: 'Fall',
    price: '$2.99/lb',
    organic: true,
  },
  {
    name: 'Fresh Basil',
    category: 'Herbs',
    description: 'Aromatic herb essential for Italian cuisine. Picked fresh daily.',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=400',
    season: 'Year-round',
    price: '$3.99/bunch',
    organic: true,
  },
  {
    name: 'Cilantro',
    category: 'Herbs',
    description: 'Fresh, citrusy herb perfect for salsa, curry, and Asian dishes.',
    image: 'https://images.unsplash.com/photo-1629157257247277-37f5494f4591?auto=format&fit=crop&w=400',
    season: 'Year-round',
    price: '$2.99/bunch',
    organic: true,
  },
  {
    name: 'Rosemary',
    category: 'Herbs',
    description: 'Fragrant, pine-like herb excellent for roasting meats and vegetables.',
    image: 'https://images.unsplash.com/photo-1594313012869-fc8999604302?auto=format&fit=crop&w=400',
    season: 'Year-round',
    price: '$3.49/bunch',
    organic: true,
  },
  {
    name: 'Mint',
    category: 'Herbs',
    description: 'Refreshing herb for teas, cocktails, and desserts. Grows abundantly in our herb garden.',
    image: 'https://images.unsplash.com/photo-1629155626843-f39714fb33?auto=format&fit=crop&w=400',
    season: 'Year-round',
    price: '$2.99/bunch',
    organic: true,
  },
]

const categories = ['All', 'Vegetables', 'Fruits', 'Herbs']

const Crops = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const filteredCrops = tabValue === 0
    ? crops
    : crops.filter(crop => crop.category === categories[tabValue])

  return (
    <PageLayout
      title="Our Crops"
      subtitle="Discover our selection of organically grown produce, cultivated with care for both flavor and sustainability."
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '& .MuiTabs-flexContainer': { gap: 2 },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9375rem',
              minWidth: 'auto',
              px: 3,
            },
          }}
        >
          {categories.map((category) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={tabValue}>
        <Grid container spacing={3}>
          {filteredCrops.map((crop, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4, xl: 3 }} key={index}>
              <CropCard {...crop} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </PageLayout>
  )
}

export default Crops
