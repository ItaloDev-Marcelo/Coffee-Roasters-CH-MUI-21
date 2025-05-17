import {Stack, Card,  CardContent, Typography} from '@mui/material';
import WhyChooseList from '../components/WhyChooseList';
export default function WhyCard() {

     

    return (
         <Stack component='section' id='card-container' >
               {
                WhyChooseList.map((item, index) => {
                    return (
                        <Card className='card from-top' key={index}>
                             <Stack>
                                  <img src={item.icon}
                               alt={item.title} width='75' style={{marginTop: '2em'}} />
                             </Stack>
                             <CardContent className='content'>
                                 <Typography variant='h3' margin='0 0 .5em 0'>{item.title}</Typography>
                                 <Typography variant='p' className='txt' >{item.text}</Typography>
                             </CardContent>
                        </Card>
                    )
                })
               }
         </Stack>
    )
}

