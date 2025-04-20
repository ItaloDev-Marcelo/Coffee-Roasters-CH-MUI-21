import {Stack, Card,  CardContent, Typography} from '@mui/material';
import { useEffect } from "react";
import logo from '../assets/images/shared/desktop/logo.svg';
export default function WhyCard() {

   

    return (
         <Stack component='header'  >
                 <nav>
                    <Stack>
                        <img src={logo} alt='logo' />
                    </Stack>
                </nav>
         </Stack>
    )
}

