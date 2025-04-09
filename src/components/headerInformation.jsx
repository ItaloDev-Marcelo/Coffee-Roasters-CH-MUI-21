
import {Stack, Typography} from '@mui/material';
import PlanButton from './PlanBtn';
const HeaderInformation = () => {
   return  (
     <>
       <Stack component='section' sx={{display: 'flex', flexDirection: 'column',
          justifyContent: {xs: 'center', sx: 'flex-start'}, 
           alignItems: {xs: 'center', sm: 'flex-start'},
           textAlign: {xs: 'center', sm: 'left'}}}>
           <Typography variant='h1' margin={{xs: '.5em 0', lg: '.7em 0 .5em 0'}} 
           fontSize={{xs: '3em', sm: '4em', lg: '5.5em'}} color='white'>Great coffee <br/> made simple.</Typography>
           <Typography variant='p'  margin={{xs: '.5em 0 1.5em 0', lg: '.2em 0 2em 0'}}
            color='white' width={{xs: 270, sm: 400, lg: 392}}>Start your mornings with the world's best coffees. Try our
            expertly curated artisan coffees from our best roasters 
            delivered directly to your door, at your schedule.</Typography>
           <PlanButton/>
       </Stack>

   </>
   )
}

export default HeaderInformation