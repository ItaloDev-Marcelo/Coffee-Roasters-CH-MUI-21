
import {Stack, Box, Typography} from '@mui/material';
import HowList from '../components/HowList';
import PlanButton from '../components/PlanBtn';
import NumCards from '../components/NumCards'
import Line from '../components/Line';
export default function HowItWorks() {
    return (
        <Stack component='section' padding='1em 2em'
        sx={{display: 'flex', flexDirection: 'column',
          justifyContent: {xs: 'center', md: 'flex-start'},
           textAlign: {xs: 'center', md: 'left'}, alignItems: {xs: 'center', md: 'flex-start'},
         
        }}
        textAlign={{xs: 'center', md: 'left'}} >
            <Typography variant='h4' margin={{md: '1em 1.5em'}}>How it works</Typography>
            <Line/>
            <Stack  
            sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, margin: {md: '-2em 0 2em 0'}}}
            >
            {
              HowList.map((HowItem, index) => {
                return <NumCards  Num={HowItem.Num} Title={HowItem.Title} Text={HowItem.Text} index={index} />
              })
            }
            </Stack>
            <Stack margin={{md: '1em 3em'}}>
            <PlanButton/>
            </Stack>
           
        </Stack>
    )
}