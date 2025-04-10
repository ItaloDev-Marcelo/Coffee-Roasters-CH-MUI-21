
import {Stack, Box, Typography} from '@mui/material';
import HowList from '../components/HowList';
import PlanButton from '../components/PlanBtn';

export default function HowItWorks() {
    return (
        <Stack component='section'>
            <Typography variant='h4'></Typography>
            <Box id='line'></Box>
            {
              HowList((item, index) => {
                  return (
                      <Stack key={index} component='article'>
                           <Typography variant='h5'>{item.number} </Typography>
                           <Typography variant='h5'>{item.title} </Typography>
                           <Typography variant='p'>{item.text} </Typography>
                      </Stack>
                  )
              } )
            }
           <PlanButton/>
        </Stack>
    )
}