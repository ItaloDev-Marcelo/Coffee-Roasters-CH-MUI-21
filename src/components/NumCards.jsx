
import {Stack,  Typography} from '@mui/material';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


export default function NumCard({Num, Title, Text, index}) {

   
        useEffect(() => {
                  ScrollReveal().reveal(".from-left", {
                    distance: "50px",
                    origin: "left",
                    duration: 1400,
                  });
              
                }, [])

   return  (
      <Stack key={index} component='article' 
       sx={{display: 'flex', flexDirection: 'column',
        justifyContent: {xs: 'center', md: 'flex-start'},
         textAlign: {xs: 'center', md: 'left'}, alignItems: {xs: 'center', md: 'flex-start'},
         margin: {xs: '1em', md: '.1em 3em', lg: '.1em 1.2em'},
      }}
      
      >
                           <Stack className='Num-card from-left' width={{xs: 250, md: 200, lg: 300}}>
                           <Typography variant='h4'
                            sx={{fontSize: {xs: '4rem', md: '5rem'}, margin: '1em 0 .5em 0'}}> {Num} </Typography>
                           <Typography variant='h5'  sx={{fontSize: {xs: '1.7em', md: '1.5em'}, margin: '0 0 .7em 0'}}> {Title} </Typography>
                           <Typography variant='p' className='txt'  sx={{ width: {md: 250}}} > {Text} </Typography>
                           </Stack>
     </Stack>
    )

}
