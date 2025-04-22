import Header from '../Plan/Header-P';
import About from '../Plan/About-P';
import AccordionSection from '../Plan/AccordionSection'
import Navbar from '../../components/NavTab'
import Footer from '../../components/footer'
export default function PlanPage()  {
   return  (
     <>
     <Navbar />
      <Header/>
      <About/>
      <AccordionSection/>
      <Footer/>
     </>
   )
}
