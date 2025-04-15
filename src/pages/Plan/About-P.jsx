

import {Stack} from '@mui/material';
import NumCard from '../../components/NumCards';
import HowList from '../../components/HowList';

import Line from '../../components/Line';
export default function AboutSection() {
    return (
         <Stack component='section' id='About-S'  padding={{lg: '2em 3em'}}
           >
             <Stack id='About-S1'    padding={{xs: '2em 0', lg: '10em 4em'}}>
             <Line />
             <Stack id='container'
              sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, marginTop: {lg: '-2%'}}}>
                {
                              HowList.map((HowItem, index) => {
                                return <NumCard
                                  Num={HowItem.Num}
                                   Title={HowItem.Title} 
                                   Text={HowItem.Text} 
                                   index={index} />
                              })
                            }
             </Stack>
             </Stack>
         </Stack>
    )
}

