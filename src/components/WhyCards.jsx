import {Stack, Card,  CardContent, Typography} from '@mui/material';
import WhyChooseList from '../components/WhyChooseList';

export default function WhyCard() {

    return (
         <Stack component='section' id='card-container' >
               {
                WhyChooseList.map((item, index) => {
                    return (
                        <Card className='card' key={index}>
                             <Stack>
                                  <img src={item.icon}
                               alt={item.title} width='75' style={{marginTop: '-2em'}} />
                             </Stack>
                             <CardContent className='content'>
                                 <Typography variant='h3'>{item.title}</Typography>
                                 <Typography variant='p'>{item.text}</Typography>
                             </CardContent>
                        </Card>
                    )
                })
               }
         </Stack>
    )
}

