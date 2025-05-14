import {Stack} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import ImagesBank from '../components/ImagesBank';

export default function WhyCard() {

    const {Close, Logo, Open} = ImagesBank ;

    const navegate = useNavigate()

    const [menu, setMenu] = useState(false);
   

    return (
         <Stack component='header' className='navegation-tab' padding={{xs: '2em' , md: '1em 2em', lg: '1.5em 3em'}}
          sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                    <Stack>
                        <img src={Logo} width='200px' alt='logo' />
                    </Stack>
                    <Stack className='hamburger-menu' onClick={() => setMenu(!menu)} display={{ xs: 'block', lg: 'none' }} >
                        <img src={Open} alt='open' />
                    </Stack>


                <Stack fontWeight='bold' color='gray' >
                <nav className={menu ? ' menu active' : 'menu'}>
                 <Stack display={{ xs: 'block', lg: 'none' }} onClick={() => setMenu(!menu)} >
                        <img src={Close} alt='close' />
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

