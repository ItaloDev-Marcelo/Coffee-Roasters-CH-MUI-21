import { Stack, Typography } from '@mui/material';

const  WhyChooseHeader = () => {
   return  (
       <Stack component='section' id='WhyChooseUs-content'
       zIndex='10'
       >
       <Stack >
       <Typography variant='h2' fontSize={{xs: '1.2em', lg: '1.5em'}} >Why choose us?</Typography>
                           <Typography variant='p' >A large part of our role is choosing which particular coffees will be featured in our range. This means working 
                            closely with the best coffee growers to give you a more impactful 
                            experience on every level.</Typography>
       </Stack>
       </Stack>
   )
}

export default WhyChooseHeader