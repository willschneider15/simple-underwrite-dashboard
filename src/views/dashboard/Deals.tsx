// ** MUI Imports
// import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'

// import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface RowType {
  cap: string
  image: string
  address: string
  price: string
  sqft: string
  status: string
  designation: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    cap: '6%',
    status: 'current',
    address: '5670 Tarboro Pl, Canal Winchester, OH 43110',
    image: 'https://photos.zillowstatic.com/fp/d470ec519cdfa513af74561ab05b3af9-cc_ft_1536.webp',
    sqft: '1908',
    price: '$319,000',
    designation: 'Office Assistant'
  },
  {
    cap: '10%',
    address: '766 N 6th St, Columbus, OH 43215',
    sqft: '2400',
    status: 'finished',
    image: 'https://photos.zillowstatic.com/fp/3e963ac20392104da2e82c8c2f8de061-p_e.jpg',
    price: '$734,000',
    designation: 'Software Engineer'
  },
  {
    cap: '12%',
    address: '1227 Cleveland Ave #1229, Columbus, OH 43201',
    image: 'https://photos.zillowstatic.com/fp/a0d76d5131084fd16475df17b9f1b0a7-cc_ft_1536.webp',
    status: 'start',
    sqft: '3954',
    price: '$675,000',
    designation: 'Data Specialist'
  },
  {
    cap: '6%',
    status: 'current',
    address: '5670 Tarboro Pl, Canal Winchester, OH 43110',
    image: 'https://photos.zillowstatic.com/fp/d470ec519cdfa513af74561ab05b3af9-cc_ft_1536.webp',
    sqft: '1908',
    price: '$319,000',
    designation: 'Office Assistant'
  },
  {
    cap: '10%',
    address: '766 N 6th St, Columbus, OH 43215',
    sqft: '2400',
    status: 'finished',
    image: 'https://photos.zillowstatic.com/fp/3e963ac20392104da2e82c8c2f8de061-p_e.jpg',
    price: '$734,000',
    designation: 'Software Engineer'
  },
  {
    cap: '12%',
    address: '1227 Cleveland Ave #1229, Columbus, OH 43201',
    image: 'https://photos.zillowstatic.com/fp/a0d76d5131084fd16475df17b9f1b0a7-cc_ft_1536.webp',
    status: 'start',
    sqft: '3954',
    price: '$675,000',
    designation: 'Data Specialist'
  }
]

const statusObj: StatusObj = {
  applied: { color: 'info' },
  start: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  finished: { color: 'success' }
}

const Deals = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>image</TableCell>
              <TableCell>price</TableCell>
              <TableCell>address</TableCell>
              <TableCell>sqft</TableCell>
              <TableCell>cap Rate</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.image} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>
                  <a
                    href={
                      'https://docs.google.com/spreadsheets/d/19w95ONHnFraTwGvjAKO-v6ptdCpbcPXvtqp9d1ZRy1A/edit#gid=355014818'
                    }
                    target='_blank'
                    rel='nofollow noreferrer'
                  >
                    <img src={row.image} width={400} height={260} />
                  </a>
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.sqft}</TableCell>
                <TableCell>{row.cap}</TableCell>
                <TableCell>
                  <a
                    href='https://docs.google.com/spreadsheets/d/19w95ONHnFraTwGvjAKO-v6ptdCpbcPXvtqp9d1ZRy1A/edit#gid=355014818'
                    target='_blank'
                    rel='nofollow noreferrer'
                  >
                    <Chip
                      label={row.status}
                      color={statusObj[row.status].color}
                      sx={{
                        height: 24,
                        fontSize: '0.75rem',
                        textTransform: 'capitalize',
                        '& .MuiChip-label': { fontWeight: 500 }
                      }}
                    />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default Deals
