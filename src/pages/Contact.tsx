import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Card from '../components/atoms/Card'
import Button from '../components/atoms/Button'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.')
      setLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.')
      setLoading(false)
      return
    }

    try {
      // Simulate API call
      // In a real application, you would send this to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form and show success message
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: LocationOnIcon,
      title: 'Address',
      content: '123 Farm Road, Rural County, State 12345',
      color: 'primary' as const,
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      color: 'success' as const,
    },
    {
      icon: EmailIcon,
      title: 'Email',
      content: 'info@dolphinsfarm.com',
      color: 'secondary' as const,
    },
    {
      icon: AccessTimeIcon,
      title: 'Hours',
      content: 'Mon-Fri: 9 AM - 5 PM, Sat: 10 AM - 4 PM, Closed Sundays',
      color: 'warning' as const,
    },
  ]

  return (
    <Box>
      {/* Header Section */}
      <Container maxWidth="xl" sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Get In Touch
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: 600, mx: 'auto' }}>
          Have questions about our farm, crops, or tours? We&apos;d love to hear from you. 
          Send us a message and we&apos;ll respond as soon as possible.
        </Typography>
      </Container>

      {/* Contact Info Cards */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card sx={{ height: '100%' }}>
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: `${info.color}.lighter`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <IconComponent sx={{ color: `${info.color}.main`, fontSize: 28 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {info.content}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {/* Contact Form Section */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Card>
          <Box sx={{ p: { xs: 4, md: 6 } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
              Send us a Message
            </Typography>

            {submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your message! We&apos;ll get back to you shortly.
              </Alert>
            )}

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3} sx={{ mb: 3 }}>
                {/* Name Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Email Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Phone Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    variant="outlined"
                  />
                </Grid>

                {/* Subject Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Farm Tour Inquiry"
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Message Field */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    Message
                  </Typography>
                  <TextareaAutosize
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    minRows={6}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontFamily: 'inherit',
                      fontSize: '1rem',
                      fontWeight: 400,
                    }}
                  />
                </Grid>
              </Grid>

              {/* Consent Checkbox Info */}
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </Typography>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  minWidth: 200,
                }}
              >
                {loading ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={20} color="inherit" />
                    Sending...
                  </Box>
                ) : (
                  'Send Message'
                )}
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Can&apos;t find what you&apos;re looking for? Check our FAQ below.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                q: 'What are your farm tour hours?',
                a: 'Farm tours are available Monday through Saturday from 10 AM to 4 PM. Tours run continuously and take about 2 hours. We recommend booking in advance.',
              },
              {
                q: 'Do you offer group discounts?',
                a: 'Yes! We offer special rates for groups of 10 or more. Please contact us for specific pricing and to arrange your group visit.',
              },
              {
                q: 'Are your products available for purchase?',
                a: 'Absolutely! You can purchase fresh crops at our farm stand, and we also offer subscription boxes delivered to your home.',
              },
              {
                q: 'Do you host birthday parties or events?',
                a: 'Yes, we can customize special events and celebrations. Contact us to discuss your specific needs and availability.',
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Card>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {item.q}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.a}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
