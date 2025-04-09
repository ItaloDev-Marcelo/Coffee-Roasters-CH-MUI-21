import {Stack, Box} from '@mui/material';
import CoffeeHero0 from '../assets/images/home/mobile/image-hero-coffeepress.jpg';
import CoffeeHero1 from '../assets/images/home/tablet/image-hero-coffeepress.jpg';
import CoffeeHero2 from '../assets/images/home/desktop/image-hero-coffeepress.jpg';
import HeaderInformation from '../components/headerInformation'
export default function Header() {

   
    return (
         <Stack component='header'>
            <Box id='banner-container'>
               <Box className='container' position='relative' display={{xs: 'block', sm: 'none'}}>
                 <img src={CoffeeHero0}  alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='7%' left='5%'>
                 <HeaderInformation/>
                 </Stack>
               </Box>

               <Box className='container'  position='relative' display={{xs:'none', sm: 'block', lg: 'none'}}>
                 <img src={CoffeeHero1}  alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='15%' left='7%'>
                 <HeaderInformation/>
                 </Stack>
               </Box>

               <Box className='container' position='relative' display={{xs:'none', sm: 'none', lg: 'block'}}>
                 <img  src={CoffeeHero2}  alt='image-hero-coffeepress' />
                 <Stack position='absolute' top='5%' left='5%'>
                 <HeaderInformation/>
                 </Stack>
               </Box>

            </Box>
         </Stack>
    )
}

