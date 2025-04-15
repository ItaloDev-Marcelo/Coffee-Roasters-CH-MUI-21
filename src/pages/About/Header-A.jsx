

import {Stack, Box, Typography} from '@mui/material';
import Hero0 from '../../assets/images/about/mobile/image-hero-whitecup.jpg';
import Hero1 from '../../assets/images/about/tablet/image-hero-whitecup.jpg';
import Hero2 from '../../assets/images/about/desktop/image-hero-whitecup.jpg';

export default function HeaderOfAboutPage() {

    return (
         <Stack component='header'>
            <Box id='banner-container'>
               <Box className='container' position='relative' display={{xs: 'block', sm: 'none'}}>
                 <img src={Hero0}   alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='7%' left='5%'>
                   <Stack component='section' sx={{display: 'flex', flexDirection: 'column',
                             justifyContent: {xs: 'center', sx: 'flex-start'}, 
                              alignItems: {xs: 'center', sm: 'flex-start'},
                              textAlign: {xs: 'center', sm: 'left'}}}>
                              <Typography variant='h1' margin={{xs: '.5em 0', lg: '.2em 0 .5em 0'}} 
                              fontSize={{xs: '3em', sm: '4em', lg: '5.5em'}} color='white'>
                                About Us
                                </Typography>
                              <Typography variant='p'  margin={{xs: '.5em 0 1.5em 0', lg: '.2em 0 2em 0'}}
                               color='white' width={{xs: 270, sm: 400, lg: 392}}>
                                 Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                               </Typography>
                              
                    </Stack>
                 </Stack>
               </Box>

               <Box className='container'  position='relative' 
               display={{xs:'none', sm: 'block', lg: 'none'}}>
                 <img src={Hero1}  alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='15%' left='7%'>
                 <Stack component='section' sx={{display: 'flex', flexDirection: 'column',
                             justifyContent: {xs: 'center', sx: 'flex-start'}, 
                              alignItems: {xs: 'center', sm: 'flex-start'},
                              textAlign: {xs: 'center', sm: 'left'}}}>
                              <Typography variant='h1' margin={{xs: '.5em 0', lg: '.7em 0 .5em 0'}} 
                              fontSize={{xs: '3em', sm: '4em', lg: '5.5em'}} color='white'>
                                About Us
                                </Typography>
                              <Typography variant='p'  margin={{xs: '.5em 0 1.5em 0', lg: '.2em 0 2em 0'}}
                               color='white' width={{xs: 270, sm: 400, lg: 392}}>
                                 Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                               </Typography>
                              
                    </Stack>
                 </Stack>
               </Box>

               <Box className='container' position='relative' display={{xs:'none', sm: 'none', lg: 'block'}}>
                 <img  src={Hero2}  alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='15%' left='5%'>
                 <Stack component='section' sx={{display: 'flex', flexDirection: 'column',
                             justifyContent: {xs: 'center', sx: 'flex-start'}, 
                              alignItems: {xs: 'center', sm: 'flex-start'},
                              textAlign: {xs: 'center', sm: 'left'}}}>
                              <Typography variant='h1' margin={{xs: '.5em 0', lg: '.2em 0 .5em 0'}} 
                              fontSize={{xs: '3em', sm: '4em', lg: '5.5em'}} color='white'>
                                About Us
                                </Typography>
                              <Typography variant='p'  margin={{xs: '.5em 0 1.5em 0',
                               lg: '-1em 0 .2em 0'}}
                               color='white' width={{xs: 270, sm: 400, lg: 392}}>
                                 Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                               </Typography>
                              
                    </Stack>
                 </Stack>
               </Box>

            </Box>
         </Stack>
    )
}

