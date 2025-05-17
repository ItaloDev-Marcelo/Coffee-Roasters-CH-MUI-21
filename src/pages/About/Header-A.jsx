import {Stack, Box, Typography} from '@mui/material';
import ImagesBank from '../../components/ImagesBank';


export default function HeaderOfAboutPage() {


   const {HeroWhitecup0, HeroWhitecup1, HeroWhitecup2} = ImagesBank;
    

    return (
         <Stack component='header'>
            <Box id='banner-container'>
               <Box className='container' position='relative' display={{xs: 'block', sm: 'none'}}>
                 <img src={HeroWhitecup0}   alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='7%' left='5.5%'>
                   <Stack component='section' className='from-left' sx={{display: 'flex', flexDirection: 'column',
                             justifyContent: {xs: 'center', sx: 'flex-start'}, 
                              alignItems: {xs: 'center', sm: 'flex-start'},
                              textAlign: {xs: 'center', sm: 'left'}}}>
                              <Typography variant='h1' margin={{xs: '.5em 0', lg: '.2em 0 .5em 0'}} 
                              fontSize={{xs: '3em', sm: '4em', lg: '5.5em'}} color='white'>
                                About Us
                                </Typography>
                              <Typography variant='p' className='txt'   margin={{xs: '.5em 0 1.5em 0', lg: '.2em 0 2em 0'}}
                               color='white' width={{xs: 270, sm: 400, lg: 392}}>
                                 Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                               </Typography>
                              
                    </Stack>
                 </Stack>
               </Box>

               <Box className='container'  position='relative' 
               display={{xs:'none', sm: 'block', lg: 'none'}}>
                 <img src={HeroWhitecup1}  alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='15%' left='7%'>
                 <Stack component='section' className='from-left'  sx={{display: 'flex', flexDirection: 'column',
                             justifyContent: {xs: 'center', sx: 'flex-start'}, 
                              alignItems: {xs: 'center', sm: 'flex-start'},
                              textAlign: {xs: 'center', sm: 'left'}}}>
                              <Typography variant='h1' margin={{xs: '.5em 0', lg: '.7em 0 .5em 0'}} 
                              fontSize={{xs: '3em', sm: '4em', lg: '5.5em'}} color='white'>
                                About Us
                                </Typography>
                              <Typography variant='p' className='txt'   margin={{xs: '.5em 0 1.5em 0', lg: '.2em 0 2em 0'}}
                               color='white' width={{xs: 270, sm: 400, lg: 392}}>
                                 Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                               </Typography>
                              
                    </Stack>
                 </Stack>
               </Box>

               <Box className='container' position='relative' display={{xs:'none', sm: 'none', lg: 'block'}}>
                 <img  src={HeroWhitecup2}  alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='15%' left='5%'>
                 <Stack component='section' className='from-left'  sx={{display: 'flex', flexDirection: 'column',
                             justifyContent: {xs: 'center', sx: 'flex-start'}, 
                              alignItems: {xs: 'center', sm: 'flex-start'},
                              textAlign: {xs: 'center', sm: 'left'}}}>
                              <Typography variant='h1' margin={{xs: '.5em 0', lg: '.2em 0 .5em 0'}} 
                              fontSize={{xs: '3em', sm: '4em', lg: '5.5em'}} color='white'>
                                About Us
                                </Typography>
                              <Typography variant='p' className='txt'   margin={{xs: '.5em 0 1.5em 0',
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

