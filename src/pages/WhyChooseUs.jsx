
import { Stack, Box } from '@mui/material';

import Block0 from '../assets/images/plan/mobile/bg-steps.png';
import Block1 from '../assets/images/plan/tablet/bg-steps.png';
import Block2 from '../assets/images/plan/desktop/bg-steps.png';
import WhyChooseHeader from '../components/whyChooseHeader'
import WhyCard from '../components/WhyCards'

export default function WhyChooseUs() {
    return (
        <Stack component='section' id='WhyChooseUs'>
            <Box className='blockImage-Container' 
             display={{xs: 'block', sm: 'none'}} sx={{ position: 'relative'}}>
                <img src={Block0} alt='' />
                <WhyChooseHeader/>
                <WhyCard/>
               
            </Box>

            <Box className='blockImage-Container'
             display={{xs:'none', sm: 'block', lg: 'none'}} sx={{ position: 'relative' }}>
                <img src={Block1} alt='' />
                <WhyChooseHeader />
                <WhyCard />
                
            </Box>

            <Box className='blockImage-Container' 
            display={{xs:'none', lg: 'block'}} sx={{ position: 'relative' }}>
                <img src={Block2} alt='' />
                <WhyChooseHeader />
                <WhyCard />
            </Box>
        </Stack>
    )
}