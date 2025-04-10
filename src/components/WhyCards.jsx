import {Stack, Card,  CardContent, Typography} from '@mui/material';
import WhyChooseList from '../components/WhyChooseList';

export default function WhyCard() {

    return (
         <Stack component='card-container'>
               {
                WhyChooseList.map((item, index) => {
                    return (
                        <Card key={index}>
                             <Stack>
                                  <img src={item.icon}
                               alt={item.title} width='50' />
                             </Stack>
                             <CardContent>
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

