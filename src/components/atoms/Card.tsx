import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card'
import { styled } from '@mui/material/styles'

interface CardProps extends MuiCardProps {
  hover?: boolean
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'hover',
})<{ hover?: boolean }>(({ hover }) => ({
  borderRadius: 16,
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  ...(hover && {
    '&:hover': {
      boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
      transform: 'translateY(-4px)',
    },
  }),
}))

const Card = ({ children, hover = true, ...props }: CardProps) => {
  return (
    <StyledCard hover={hover} {...props}>
      {children}
    </StyledCard>
  )
}

export default Card
