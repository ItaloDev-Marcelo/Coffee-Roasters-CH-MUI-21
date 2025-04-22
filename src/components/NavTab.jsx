import {Stack} from '@mui/material';
import React, { useState } from 'react';
import logo from '../assets/images/shared/desktop/logo.svg';
import open from '../assets/images/shared/mobile/icon-hamburger.svg';
import close from '../assets/images/shared/mobile/icon-close.svg';
import { useNavigate } from "react-router-dom"
export default function WhyCard() {


    const navegate = useNavigate()

    const [menu, setMenu] = useState(false);
   

    return (
         <Stack component='header' className='navegation-tab' padding={{xs: '2em' , md: '1em 2em', lg: '1.5em 3em'}}
          sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                    <Stack>
                        <img src={logo} width='200px' alt='logo' />
                    </Stack>
                    <Stack className='hamburger-menu' onClick={() => setMenu(!menu)} display={{ xs: 'block', lg: 'none' }} >
                        <img src={open} alt='open' />
                    </Stack>


                <Stack  >
                <nav className={menu ? ' menu active' : 'menu'}>
                 <Stack display={{ xs: 'block', lg: 'none' }} onClick={() => setMenu(!menu)} >
                        <img src={close} alt='close' />
                    </Stack>
                    <ul  id='menu-list'>
                        <li onClick={() => navegate('/Home')}>Home</li>
                        <li onClick={() => navegate('/About-us')}>About Us </li>
                        <li onClick={() => navegate('/Plan')}>Create your plan</li>
                    </ul>
                </nav>
                </Stack>
         </Stack>
    )
}

