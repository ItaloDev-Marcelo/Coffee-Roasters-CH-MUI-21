import { useState, useEffect } from 'react';
import {
    Stack, Button, Accordion, AccordionSummary,
    AccordionDetails, Typography,
    Card, CardContent,
    Dialog, DialogTitle, DialogContent, DialogContentText
} from '@mui/material';
import Divider from '@mui/material/Divider';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AccordionSection() {

    const [selectTypes, setSelectTypes] = useState({
        option1: ' _____  ',
        option2: ' _____ ',
        option3: ' _____ ',
        option4: ' _____ ',
        option5: ' ___-_ '
    })

    const [price, setPrice] = useState(0)
    const [open, setOpen] = useState(false);
    const [activeDialog, setActiveDialog] = useState(true);

    useEffect(() => {
        if (selectTypes.option5 !== ' ___-_ ') {
            setActiveDialog(!activeDialog)
        } else {
            setActiveDialog(!activeDialog)
        }

    }, [selectTypes.option5])

    const SelectOption1 = (type, value) => {
        setSelectTypes(prev => (
            {
                ...prev,
                [type]: value
            }
        ))

        if (type === "option5") {
            setPrice(value === 'Every week' ? 7.20  : value === 'Every 2 weeks' ? 9.60 * 2 : 12 * 4)
        }
    }

    const ActiveDialogSection = () => {
        setActiveDialog(!activeDialog)
        setOpen(!open)
    }


    const hundleToggle = () => {
        setOpen(!open)
        setSelectTypes({
            option1: ' _____  ',
            option2: ' _____ ',
            option3: ' _____ ',
            option4: ' _____ ',
            option5: ' ___-_ '
        })
    }






    return (
        <>
            <Stack>
                <div>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} arial-controls='panel1-content'  >
                            <Typography>How do you drink you coffee?</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                display: 'flex', flexDirection: { xs: 'column', lg: 'row' },
                                justifyContent: { xs: 'center', lg: 'space-around' }, textAlign: 'left'
                            }}>

                            <Card
                                className={selectTypes.option1 === ' Capsule ' ? 'accordionCard active' :
                                    'accordionCard'} onClick={() => SelectOption1('option1', ' Capsule ')}>
                                <CardContent>
                                    <Typography variant='h5'>Capsule</Typography>
                                    <Typography variant='p'>Compatible with Nespresso systems and similar brewers</Typography>
                                </CardContent>

                            </Card>


                            <Card className={selectTypes.option1 === ' Filter ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option1', ' Filter ')}>
                                <CardContent>
                                    <Typography variant='h5'>Filter</Typography>
                                    <Typography variant='p'>For pour over or drip methods like Aeropress, Chemex, and V60</Typography>
                                </CardContent>
                            </Card>


                            <Card className={selectTypes.option1 === ' Expresso ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option1', ' Expresso ')}>
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
                        <AccordionDetails
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', lg: 'row' },
                                justifyContent: { xs: 'center', lg: 'space-around' },
                                textAlign: 'left'
                            }}>
                            <Card className={selectTypes.option2 === ' Single Origin  ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option2', ' Single Origin ')}>
                                <CardContent>
                                    <Typography variant='h5'>Single Origin</Typography>
                                    <Typography variant='p'>Distinct,high quality coffee from a specific family-owned farm</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option2 === ' Decaf ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option2', ' Decaf ')}>
                                <CardContent>
                                    <Typography variant='h5'>Decaf</Typography>
                                    <Typography variant='p'>Just like regular coffee, except the caffeine has been removed</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option2 === ' Blended ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option2', ' Blended ')}>
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
                        <AccordionDetails sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            justifyContent: { xs: 'center', lg: 'space-around' },
                            textAlign: 'left'
                        }}>
                            <Card className={selectTypes.option3 === ' 250g ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option3', ' 250g ')}>
                                <CardContent>
                                    <Typography variant='h5'>250g</Typography>
                                    <Typography variant='p'>Perfect for the solo drinker. Yields about 12 delicious cups.</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option3 === ' 500g ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option3', ' 500g ')}>
                                <CardContent>
                                    <Typography variant='h5'>500g</Typography>
                                    <Typography variant='p'>Perfect option for a couple. Yields abouut 40 delectable cups.</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option3 === ' 1000g ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option3', ' 1000g ')}>
                                <CardContent>
                                    <Typography variant='h5'>1000g</Typography>
                                    <Typography variant='p'>Perfect for offices and events. Yields about 90 delightfull cups. </Typography>
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} arial-controls='panel4-content'  >
                            <Typography>Want us to grind them?</Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' }, justifyContent:
                                { xs: 'center', lg: 'space-around' }, textAlign: 'left'
                        }}>
                            <Card className={selectTypes.option4 === ' Wholebean ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option4', ' Wholebean ')}>
                                <CardContent>
                                    <Typography variant='h5'>Wholebean</Typography>
                                    <Typography variant='p'>Best choice if you chersih the full sensory experience</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option4 === ' Filter ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option4', ' Filter ')}>
                                <CardContent>
                                    <Typography variant='h5'>Filter</Typography>
                                    <Typography variant='p'>For drip or pour-over coffee methods such as V60 or Aeropress</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option4 === ' Cafetiére ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option4', ' Cafetiére ')}>
                                <CardContent>
                                    <Typography variant='h5'>Cafetiére</Typography>
                                    <Typography variant='p'>Course ground beans specially suited for french press coffee</Typography>
                                </CardContent>
                            </Card>

                        </AccordionDetails>
                    </Accordion>


                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} arial-controls='panel5-content'  >
                            <Typography>How often should we deliver</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            justifyContent: { xs: 'center', lg: 'space-around' },
                            textAlign: 'left'
                        }}>
                            <Card className={selectTypes.option5 === ' Every week ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option5', ' Every week ')}>
                                <CardContent>
                                    <Typography variant='h5'>Every week</Typography>
                                    <Typography variant='p'>$7.2 per shipment. Includes free First-class shipping.</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option5 === ' Every 2 weeks ' ? 'accordionCard active' :
                                'accordionCard'}
                                onClick={() => SelectOption1('option5', ' Every 2 weeks ')}>
                                <CardContent>
                                    <Typography variant='h5'>Every 2 weeks</Typography>
                                    <Typography variant='p'>$9.60 per shipment. Includes free priority shipping</Typography>
                                </CardContent>
                            </Card>

                            <Card className={selectTypes.option5 === ' Every Month ' ? 'accordionCard active' :
                                'accordionCard'} onClick={() => SelectOption1('option5', ' Every Month ')}>
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
                        “I drink my coffee as  {selectTypes.option1} , with a   {selectTypes.option2}  type of bean. {selectTypes.option3}
                        ground ala  {selectTypes.option4}  , sent to me {selectTypes.option5} .”
                    </Typography>
                </Stack>

                {
                    activeDialog  ?  <Button
                    sx={{ width: { xs: 150, lg: 200 }, backgroundColor: '#0e8684', color: '#fff', height: '45px' }}
                     onClick={ActiveDialogSection} >Create your Plan</Button>
                    :  <Button
                    sx={{ width: { xs: 150, lg: 200 }, backgroundColor: '#0e8684', color: '#fff', height: '45px' }}
                    disabled onClick={ActiveDialogSection} >Create your Plan</Button>
                }
               

            </Stack>
            <Dialog open={open} onClose={!open} padding='1.5em'><DialogTitle >Order Summary</DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText>
                        <strong> “I drink my coffee as  {selectTypes.option1} , with a   {selectTypes.option2}  type of bean. {selectTypes.option3}
                            ground ala  {selectTypes.option4}  , sent to me {selectTypes.option5} .”</strong>
                        Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                        <Stack sx={{display :'flex' , flexDirection: {xs: 'column', lg: 'row'},
                         justifyContent: {xs: 'center', lg: 'space-between'}, marginTop: '1em'}}>

                            <Typography variant='h6' display={{xs: 'none', lg: 'block'}} > <strong>$ {price.toFixed(2)} / mo</strong> </Typography>
                            
                             <Button onClick={hundleToggle} sx={{ width: { xs: 150, lg: 200 }, display: {xs: 'block', lg: 'none'},
                                backgroundColor: '#0e8684', color: '#fff', height: '45px' }}> $ {price.toFixed(2)}  / mo </Button>
                                
                                <Button onClick={hundleToggle} sx={{ width: { xs: 150, lg: 200 }, display: {xs: 'none', lg: 'block'},
                             backgroundColor: '#0e8684', color: '#fff', height: '45px' }}> Checkout </Button>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
            </Dialog>


        </>

    )
}
