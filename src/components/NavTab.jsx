import {Stack} from '@mui/material';
import logo from '../assets/images/shared/desktop/logo.svg';
import open from '../assets/images/shared/mobile/icon-hamburger.svg';
import close from '../assets/images/shared/mobile/icon-close.svg';
import { useNavigate } from "react-router-dom"
export default function WhyCard() {


    const navegate = useNavigate()
   

    return (
         <Stack component='header'  >
                    <Stack>
                        <img src={logo} alt='logo' />
                    </Stack>
                    <Stack display={{ xs: 'block', md: 'none' }} >
                        <img src={open} alt='open' />
                    </Stack>
                 <nav>
                 <Stack display={{ xs: 'block', md: 'none' }} >
                        <img src={close} alt='close' />
                    </Stack>
                    <ul>
                        <li onClick={() => navegate('/Home')}>Home</li>
                        <li onClick={() => navegate('/About-us')}>About Us </li>
                        <li onClick={() => navegate('/Plan')}>Create your plan</li>
                    </ul>
                </nav>
         </Stack>
    )
}

