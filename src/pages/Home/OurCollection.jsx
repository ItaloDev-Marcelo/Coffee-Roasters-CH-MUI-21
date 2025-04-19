import {Stack, Typography} from '@mui/material';
import CoffeeList from '../../components/CoffeList';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function OurCollection() {

     useEffect(() => {
       ScrollReveal().reveal(".from-top", {
         distance: "10px",
         origin: "top",
         duration: 1000,
       });
   
     }, [])
   

    return (
      <Stack component='section' position='relative' sx={{display:'flex', flexDirection: {xs:'column', lg: 'row'},
       justifyContent: {xs: 'center', lg: 'flex-start'},
       alignItems: {xs: 'center', lg: 'flex-start'},
       alignContent: {xs: 'center', lg: 'flex-start'},
       textAlign: {xs: 'center', md: 'left', lg: 'center'},
       margin: {lg: '5em 0 2em 0'}
      }} padding={{xs: '1em 2em', lg: '2.5em 7rem'}}>
         <Stack className='collection-T '></Stack>
         {
           CoffeeList.map((data, index) => {
              return   <Stack key={index} sx={{display:'flex', 
              flexDirection: {xs: 'column', md: 'row', lg: 'column'}}} className='Coffee-block from-top' >
              <Stack className='coffee-image'
               margin={{xs: ' 1em 0', lg: '0 0 3em 0'}} >
                  <img src={data.Icon} alt={data.Title}/>
              </Stack>
              <Stack className='info' width={{md: '385px', lg: 'auto'}} padding={{xs: '2em', lg: '1.5em'}}  >
                 <Typography variant='h2' fontSize='1.2em'>{data.Title}</Typography>
                 <Typography variant='p' margin={{xs: '1em 0', lg: '2em 0'}} >{data.Text} </Typography>
              </Stack> 
           </Stack>
           })
         }
      </Stack>
    )
}