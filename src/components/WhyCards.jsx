import {Stack, Card,  CardContent, Typography} from '@mui/material';
import WhyChooseList from '../components/WhyChooseList';
// import { useEffect } from "react";
// import ScrollReveal from "scrollreveal";

export default function WhyCard() {

    //  useEffect(() => {
    //            ScrollReveal().reveal(".from-top", {
    //              distance: "50px",
    //              origin: "top",
    //              duration: 1000,
    //            });
           
    //          }, [])

    return (
         <Stack component='section' id='card-container' >
               {
                WhyChooseList.map((item, index) => {
                    return (
                        <Card className='card ' key={index}>
                             <Stack>
                                  <img src={item.icon}
                               alt={item.title} width='75' style={{marginTop: '-2em'}} />
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

