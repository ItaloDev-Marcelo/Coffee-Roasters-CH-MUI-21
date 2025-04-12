
import {Stack, Box, Typography} from '@mui/material';
import HowList from '../components/HowList';
import PlanButton from '../components/PlanBtn';
import NumCards from '../components/NumCards'
export default function HowItWorks() {
    return (
        <Stack component='section'>
            <Typography variant='h4'>How it works</Typography>
            <Box id='line'></Box>
            {
              HowList.map((HowItem, index) => {
                return <NumCards  Num={HowItem.Num} Title={HowItem.Title} Text={HowItem.Text} index={index} />
              })
            }
           <PlanButton/>
        </Stack>
    )
}