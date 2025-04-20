import Header from './Header-H';
import OurCollection from './OurCollection';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import NavBar from '../../components/NavTab';

export default  function HomePage() {
  return (
   <>
   <NavBar />
    <Header/>
    <OurCollection/>
    <WhyChooseUs/>
    <HowItWorks/>
    </>
  )
}

