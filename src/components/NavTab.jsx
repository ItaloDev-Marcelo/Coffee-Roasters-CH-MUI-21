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
         <Stack component='header' padding='2em'  sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                    <Stack>
                        <img src={logo} width='200px' alt='logo' />
                    </Stack>
                    <Stack display={{ xs: 'block', md: 'none' }} >
                        <img src={open} alt='open' />
                    </Stack>
                <Stack onClick={() => setMenu(!menu)} className={menu ? ' menu active' : 'menu'}>
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
         </Stack>
    )
}

