import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

interface ButtonProps extends MuiButtonProps {
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: 20,
  padding: '8px 24px',
  fontWeight: 500,
  textTransform: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}))

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
