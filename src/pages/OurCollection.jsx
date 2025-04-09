import {Stack, Typography} from '@mui/material';
import CoffeeList from '../components/CoffeList';

export default function OurCollection() {
    return (
      <Stack component='section' position='relative'>
         <Stack className='collection-T'></Stack>
         {
           CoffeeList.map((data, index) => {
              return   <Stack key={index} className='Coffee-block'>
              <Stack className='coffee-image'>
                  <img src={data.Icon} alt={data.Title}/>
              </Stack>
              <Stack className='info'>
                 <Typography variant='h2' fontSize='1.2em'>{data.Title}</Typography>
                 <Typography variant='p'>{data.Text} </Typography>
              </Stack>
           </Stack>
           })
         }
      </Stack>
    )
}