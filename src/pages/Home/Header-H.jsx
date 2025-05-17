import {Stack, Box} from '@mui/material';
import HeaderInformation from '../../components/headerInformation'
import ImagesBank from '../../components/ImagesBank';
export default function Header() {

  const {CoffeeHero0, CoffeeHero1, CoffeeHero2} = ImagesBank ;
 
   
    return (
         <Stack component='header' sx={{ padding: {lg: '0 1em'} }}>
            <Box id='banner-container'>
               <Box className='container' position='relative' display={{xs: 'block', sm: 'none'}}>
                 <img src={CoffeeHero0}  alt='image-hero-coffeepress' />
                 <Stack className='from-left' position='absolute' top='7%' left='1%'>
                 <HeaderInformation/>
                 </Stack>
               </Box>

               <Box className='container'  position='relative' display={{xs:'none', sm: 'block', lg: 'none'}}>
                 <img src={CoffeeHero1}  alt='image-hero-coffeepress' />
                 <Stack className='from-left' position='absolute' top='15%' left='7%'>
                 <HeaderInformation/>
                 </Stack>
               </Box>

               <Box className='container' position='relative' display={{xs:'none', sm: 'none', lg: 'block'}}>
                 <img  src={CoffeeHero2}  alt='image-hero-coffeepress' />
                 <Stack className='from-left' position='absolute' top='5%' left='5%'>
                 <HeaderInformation/>
                 </Stack>
               </Box>

            </Box>
         </Stack>
    )
}

