

import { Stack, Typography } from '@mui/material';
import HeadquartersList from '../../components/HeadList'

export default function Headquarters() {
    return (
        <Stack sx={{display:'flex', flexDirection: 'column',
                    justifyContent: {xs: 'center', lg: 'flex-start'},
                    textAlign: {xs: 'center', lg: 'left'},
                    alignItems: {xs: 'center', lg: 'flex-start'},
                    alignContent: {xs: 'center', lg: 'flex-start'},
                    margin: {xs: '1em 0', lg: '1em 3em '},
                    padding: {xs: '1em 2em', lg: '7em 10em'}
                }} >
             <Typography variant='h3' fontSize={{xs: '2em', lg: '2.2em'}}
              margin={{xs:'1em 0', lg: '2em 0'}}>Our headquarters</Typography>
             <Stack>
              <Stack sx={{display: 'flex',
        flexDirection: {xs: 'column', lg: 'row'}}} width={{lg: '100%'}}>

              {
                   HeadquartersList.map((item, index) => {
                     return  (
                      <Stack key={index}  className='mini-card'
                       width={{xs: 270, sm: 400, lg: 300}} margin={{xs: '1.3em 0'}}>
                      <Stack sx={{alignSelf: {xs: 'center', lg: 'flex-start'}}}>
                      <img src={item.Icon}  className='mini-icon' alt=''/>
                      </Stack>
                      <Typography variant='h3' fontSize={{xs: '2em'}} margin={{xs: '.5em 0'}}>{item.Title}</Typography>
                      <ul>
                         <li>{item.Street}</li>
                         <li>{item.City}</li>
                         <li>{item.Address}</li>
                         <li>{item.Tell}</li>
                      </ul>
                  </Stack>
                     ) 
                   } )
                 }
             </Stack>
              </Stack>
               
        </Stack>
    )
}