
import { Stack, Box } from '@mui/material';
import WhyChooseHeader from '../components/whyChooseHeader'
import WhyCard from '../components/WhyCards'

export default function WhyChooseUs() {
    return (
        <Stack component='section' id='WhyChooseUs'>
            <Stack id='bg'>
            <Box className='blockImage-Container' >
                <WhyChooseHeader/>
            </Box>
            </Stack>
            <WhyCard/>
            
        </Stack>
    )
}