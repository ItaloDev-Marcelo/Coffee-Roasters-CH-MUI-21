
import { Stack, Box } from '@mui/material';
import WhyChooseHeader from '../../components/whyChooseHeader'
import WhyCard from '../../components/WhyCards'
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function WhyChooseUs() {

     useEffect(() => {
           ScrollReveal().reveal(".from-top", {
             distance: "10px",
             origin: "top",
             duration: 1000,
           });
       
         }, [])

    return (
        <Stack component='section' id='WhyChooseUs'>
            <Stack id='bg'>
            <Box className='blockImage-Container from-top' >
                <WhyChooseHeader/>
            </Box>
            </Stack>
            <WhyCard/>
            
        </Stack>
    )
}