import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'

interface BadgeProps {
  label: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'default'
  size?: 'small' | 'medium'
}

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 8,
  fontWeight: 500,
  '& .MuiChip-label': {
    px: 1.5,
  },
}))

const Badge = ({ label, color = 'primary', size = 'small' }: BadgeProps) => {
  return <StyledChip label={label} color={color} size={size} variant="filled" />
}

export default Badge
