import {Stack} from '@mui/material';

export default function Line() {

    return (
         <Stack component='section'  sx={{display: {xs: 'none', md: 'flex'},
         flexDirection: 'row',
         justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }} 
         className='line-container' >
              <Stack className='circle'></Stack>
              <Stack className='circle'></Stack>
              <Stack className='circle'></Stack>
              <Stack className='line-thought'></Stack>
         </Stack>
    )
}

