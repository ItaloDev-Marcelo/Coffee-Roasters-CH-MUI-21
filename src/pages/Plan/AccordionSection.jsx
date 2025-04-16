import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import {Stack} from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionSection() {

    const [selectTypes, setSelectTypes] = useState({
        option1: '_____',
        option2: '_____',
        option3: '_____',
        option4: '_____',
        option5: '___-_'
    })

   

    const SelectOption1 = (type, value) => {
        setSelectTypes(prev =>  (
            {
                ...prev,
                [type]: value
            }
        ) )
    }


    

    return (
        <>
            <div>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} arial-controls='panel1-content'  >
                    <Typography>How do you drink you coffee?</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <Card onClick={ () => SelectOption1('option1', 'Capsule') }>
                        <CardContent>
                            <Typography variant='h5'>Capsule</Typography>
                            <Typography variant='p'>Compatible with Nespresso systems and similar brewers</Typography>
                        </CardContent>

                    </Card>


                    <Card onClick={ () => SelectOption1('option1','Filter') }>
                        <CardContent>
                            <Typography variant='h5'>Filter</Typography>
                            <Typography variant='p'>For pour over or drip methods like Aeropress, Chemex, and V60</Typography>
                        </CardContent>
                    </Card>


                    <Card onClick={ () => SelectOption1('option1','Expresso') }>
                        <CardContent>
                            <Typography variant='h5'>Expresso</Typography>
                            <Typography variant='p'>Dense and finely ground benas for an intense, flavorful experience</Typography>
                        </CardContent>
                    </Card>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} arial-controls='panel2-content'  >
                    <Typography>What type of coffee?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Card onClick={ () => SelectOption1('option2','Single Origin') }>
                    <CardContent>
                          <Typography variant='h5'>Single Origin</Typography>
                          <Typography variant='p'>Distinct,high quality coffee from a specific family-owned farm</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option2','Decaf') }>
                    <CardContent>
                          <Typography variant='h5'>Decaf</Typography>
                          <Typography variant='p'>Just like regular coffee, except the caffeine has been removed</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option2','Blended') }>
                    <CardContent>
                          <Typography variant='h5'>Blended</Typography>
                          <Typography variant='p'>Combination of two or three dark roasted beans of organic coffees</Typography>
                    </CardContent>
                </Card>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} arial-controls='panel3-content'  >
                    <Typography>How much would you like ?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Card onClick={ () => SelectOption1('option3','250g') }>
                    <CardContent>
                          <Typography variant='h5'>250g</Typography>
                          <Typography variant='p'>Perfect for the solo drinker. Yields about 12 delicious cups.</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option3','500g') }>
                    <CardContent>
                          <Typography variant='h5'>500g</Typography>
                          <Typography variant='p'>Perfect option for a couple. Yields abouut 40 delectable cups.</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option3','1000g') }>
                    <CardContent>
                          <Typography variant='h5'>1000g</Typography>
                          <Typography variant='p'>Perfect for offices and events. Yields about 90 delightfull cups. </Typography>
                    </CardContent>
                </Card>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMoreIcon />} arial-controls='panel4-content'  >
                    <Typography>Want us to grind them?</Typography>
                </AccordionSummary>

                <Card  onClick={ () => SelectOption1('option4','Wholebean') }>
                    <CardContent>
                          <Typography variant='h5'>Wholebean</Typography>
                          <Typography variant='p'>Best choice if you chersih the full sensory experience</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option4','Filter') }>
                    <CardContent>
                          <Typography variant='h5'>Filter</Typography>
                          <Typography variant='p'>For drip or pour-over coffee methods such as V60 or Aeropress</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option4','Cafetiére') }>
                    <CardContent>
                          <Typography variant='h5'>Cafetiére</Typography>
                          <Typography variant='p'>Course ground beans specially suited for french press coffee</Typography>
                    </CardContent>
                </Card>
                
            </Accordion>


            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} arial-controls='panel5-content'  >
                    <Typography>How often should we deliver</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Card onClick={ () => SelectOption1('option5','Every week') }>
                    <CardContent>
                          <Typography variant='h5'>Every week</Typography>
                          <Typography variant='p'>$7.2 per shipment. Includes free First-class shipping.</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option5','Every 2 weeks') }>
                    <CardContent>
                          <Typography variant='h5'>Every 2 weeks</Typography>
                          <Typography variant='p'>$9.60 per shipment. Includes free priority shipping</Typography>
                    </CardContent>
                </Card>

                <Card onClick={ () => SelectOption1('option5','Every Month') }>
                    <CardContent>
                          <Typography variant='h5'>Every Month</Typography>
                          <Typography variant='p'>$12.00 per shipment. Includes free prioruty shipping.</Typography>
                    </CardContent>
                </Card>
                </AccordionDetails>
            </Accordion>

            </div>
            <Stack component='article'>
               <Typography variant='h5'>Order summary</Typography>
               <Typography variant='p'>
               “I drink my coffee as  {selectTypes.option1} , with a  {selectTypes.option2}   type of bean. {selectTypes.option3}  
                ground ala {selectTypes.option4} , sent to me {selectTypes.option5} .”
               </Typography>
            </Stack>
        </>
    )
}
