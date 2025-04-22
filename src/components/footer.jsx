
import {Stack,  Typography} from '@mui/material';
import logo from '../assets/images/shared/logo-white.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {

   
       

   return  (
      <Stack component='footer' sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'},
       justifyContent: {xs: 'center', lg: 'space-around'}}} >
         <Stack id='logo'>
            <img src={logo} alt='logo' width='200px' />
         </Stack>
         <Stack id='list'>
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
    )

}
