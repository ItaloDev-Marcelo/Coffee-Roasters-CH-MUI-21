
import {Stack} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import imagesBank from '../components/ImagesBank';
export default function Footer() {

   const {LogoWhite} = imagesBank;
   
       

   return  (
    <Stack padding={{xs: '2em', lg: '2em 4em'}} margin={{lg: '2em 0'}}>
        <Stack component='footer' sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'},
       justifyContent: {xs: 'center', lg: 'space-around'}, background: '#2c353e', padding: ' 1.7em 2em'}} >
         <Stack id='logo' alignSelf={{xs: 'center', lg: 'flex-start'}}>
            <img src={LogoWhite} alt='logo' width='200px' />
         </Stack>
         <Stack id='list' sx={{color: '#fff', position: 'relative', top: {xs: '-3em', lg: '.2em'}} }>
            <ul id='menu-list'>
               <li>Home</li>
               <li>About Us</li>
               <li>Create your plan</li>
            </ul>
         </Stack>
         <Stack id='icons'>
            <Stack id='social-icons' display='flex'
             flexDirection='row' gap='1em' color='#fff' justifyContent='center' alignItems='center'>
               <FacebookIcon fontSize='large' sx={{color: 'white'}}/>
               <TwitterIcon fontSize='large' sx={{color: 'white'}}/>
               <InstagramIcon fontSize='large' sx={{color: 'white'}}/>
            </Stack>
         </Stack>
      </Stack>
    </Stack>
    )

}
