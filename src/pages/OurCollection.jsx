import {Stack, Typography} from '@mui/material';
import CoffeeList from '../components/CoffeList';

export default function OurCollection() {
    return (
      <Stack component='section' position='relative' sx={{display:'flex', flexDirection: {xs:'column', lg: 'row'},
       justifyContent: {xs: 'center', lg: 'flex-start'},
       alignItems: {xs: 'center', lg: 'flex-start'},
       alignContent: {xs: 'center', lg: 'flex-start'},
       textAlign: 'center'
      }} padding={{xs: '1em 2em', lg: '1em 7rem'}}>
         <Stack className='collection-T'></Stack>
         {
           CoffeeList.map((data, index) => {
              return   <Stack key={index} className='Coffee-block'>
              <Stack className='coffee-image' margin={{xs: '2em 0', lg: '1em 0'}}>
                  <img src={data.Icon} alt={data.Title}/>
              </Stack>
              <Stack className='info'>
                 <Typography variant='h2' fontSize='1.2em'>{data.Title}</Typography>
                 <Typography variant='p' margin={{xs: '1em 0', lg: '2em 0'}} >{data.Text} </Typography>
              </Stack>
           </Stack>
           })
         }
      </Stack>
    )
}