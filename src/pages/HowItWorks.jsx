
import {Stack, Box, Typography} from '@mui/material';
import HowList from '../components/HowList';
import PlanButton from '../components/PlanBtn';

export default function HowItWorks() {
    return (
        <Stack component='section'>
            <Typography variant='h4'>How it works</Typography>
            <Box id='line'></Box>
            {
              HowList.map((HowItem, index) => {
                return <Stack key={index} component='article'>
                      <Typography variant='h4'> {HowItem.Num} </Typography>
                      <Typography variant='h5'> {HowItem.Title} </Typography>
                      <Typography variant='p'> {HowItem.Text} </Typography>
                </Stack>
              })
            }
           <PlanButton/>
        </Stack>
    )
}