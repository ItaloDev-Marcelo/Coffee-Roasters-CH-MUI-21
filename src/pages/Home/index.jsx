import Header from './Header-H';
import OurCollection from './OurCollection';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import NavBar from '../../components/NavTab';
import Footer from '../../components/footer';

export default  function HomePage() {
  return (
   <>
   <NavBar />
    <Header/>
    <OurCollection/>
    <WhyChooseUs/>
    <HowItWorks/>
    <Footer/>
    </>
  )
}

