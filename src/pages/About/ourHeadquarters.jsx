

import { Stack, Typography } from '@mui/material';
import HeadquartersList from '../../components/HeadList'

export default function Headquarters() {
    return (
        <Stack>
             <Typography variant='h3'>Our headquarters</Typography>
             <Stack>
                 {
                   HeadquartersList.map((item, index) => {
                     return  (
                      <Stack key={index}>
                      <img src={item.Icon} className='mini-icon' alt=''/>
                      <Typography variant='h3'>{item.Title}</Typography>
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
    )
}