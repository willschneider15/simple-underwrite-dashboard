// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  title: string
  sales: string
  trend: ReactNode
  trendDir: string
  subtitle: string
  avatarText: string
  trendNumber: string
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    sales: '374k',
    trendDir: 'up',
    subtitle: 'USA',
    title: '$514.6B',
    avatarText: 'US',
    trendNumber: '11.3%',
    avatarColor: 'success',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '458k',
    subtitle: 'UK',
    trendDir: 'up',
    title: '$115.8B',
    avatarText: 'UK',
    trendNumber: '6.4%',
    avatarColor: 'success',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '73k',
    title: '$120B',
    trendDir: 'up',
    avatarText: 'IN',
    subtitle: 'India',
    trendNumber: '3.8%',
    avatarColor: 'warning',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '230k',
    title: '$400B',
    trendDir: 'up',
    avatarText: 'JA',
    subtitle: 'Japan',
    trendNumber: '6.9%',
    avatarColor: 'secondary',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '1.07m',
    title: '$30B',
    trendDir: 'up',
    avatarText: 'SW',
    subtitle: 'Switzerland',
    trendNumber: '6.0%',
    avatarColor: 'error',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  }
]

const SalesByCountries = () => {
  return (
    <Card>
      <CardHeader
        title='International Property Markets'
        titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 5.875 } : {})
              }}
            >
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  marginRight: 3,
                  fontSize: '1rem',
                  color: 'common.white',
                  backgroundColor: `${item.avatarColor}.main`
                }}
              >
                {item.avatarText}
              </Avatar>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px' }}>{item.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {item.trend}
                      <Typography
                        variant='caption'
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.5,
                          color: item.trendDir === 'down' ? 'error.main' : 'success.main'
                        }}
                      >
                        {item.trendNumber}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                    {item.subtitle}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                    {item.sales}
                  </Typography>
                  <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                    Average Sale
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default SalesByCountries
