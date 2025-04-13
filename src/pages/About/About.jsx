

import { Stack, Typography } from '@mui/material';
import Barista0 from '../../assets/images/about/mobile/image-commitment.jpg';
import Barista1 from '../../assets/images/about/tablet/image-commitment.jpg';
import Barista2 from '../../assets/images/about/desktop/image-commitment.jpg';
import Quality0 from  '../../assets/images/about/mobile/image-quality.jpg'
import Quality1 from  '../../assets/images/about/tablet/image-quality.jpg'
import Quality2 from  '../../assets/images/about/desktop/image-quality.jpg'

export default function AboutArea() {
    return (
        <Stack component='section' id='quality-container'>

            <Stack component='section'>
                <Stack className='about-image'>
                    <Stack display={{xs: 'block', md: 'none', lg: 'none'}}>
                        <img src={Barista0} alt=''/>
                    </Stack>
                    <Stack display={{xs: 'none', md: 'block', lg: 'none'}}>
                        <img src={Barista1} alt=''/>
                    </Stack>
                    <Stack display={{xs: 'none', md: 'none', lg: 'block'}}>
                        <img src={Barista2} alt=''/>
                    </Stack>
                </Stack>
                <Typography variant='h2'>
                Our commitment
                </Typography>
                <Typography variant='p'>
                We’re built on a simple mission and a commitment to doing good along the way. 
                We want to make it easy for you to discover and brew the world’s best coffee at home. 
                It all starts at the source. To locate the specific lots we want to purchase, 
                we travel nearly 60 days a year trying to understand the challenges
                 and opportunities in each of these places. We collaborate with exceptional 
                 coffee growers and empower a global community of farmers through
                with well above fair-trade benchmarks. We also offer training, support farm
                 community initiatives, and invest in coffee plant science. Curating only the 
                 finest blends, we roast each lot to 
                highlight tasting profiles distinctive to their native growing region.
                </Typography>
            </Stack>

            <Stack component='section' id='quality'>
                <Stack className='about-image'>
                <Stack display={{xs: 'block', md: 'none', lg: 'none'}}>
                        <img src={Quality0} alt=''/>
                    </Stack>
                    <Stack display={{xs: 'none', md: 'block', lg: 'none'}}>
                        <img src={Quality1}  alt=''/>
                    </Stack>
                    <Stack display={{xs: 'none', md: 'none', lg: 'block'}}>
                        <img src={Quality2}  alt=''/>
                    </Stack>
                </Stack>
                <Typography variant='h2'>Uncompromising quality
                </Typography>
                <Typography variant='p'>Although we work with growers who pay close attention to all
                     stages of harvest and processing, we employ, on our end, a 
                     rigorous quality control program to avoid over-roasting or baking the coffee dry.
                      Every bag of coffee is tagged with a roast date and batch number. Our goal is to
                     roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</Typography>
            </Stack>
        </Stack>
    )
}