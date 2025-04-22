import HeaderOfAboutPage from './Header-A';
import Headquarters from './ourHeadquarters'
import AboutArea from './About-A'
import NavBar from '../../components/NavTab';
import Footer from '../../components/footer';

export default  function AboutHomePage() {
  return (
   <>
   <NavBar/>
   <HeaderOfAboutPage/>
        <AboutArea/>
        <Headquarters/>
  <Footer/>
    </>
  )
}

