
import AboutUs from './About Us/AboutUs';
import './App.css';
// // import FormModule from './CountryApi_Form/FormModule';
// import FormOperate from './CountryApi_Form/FormOperate';
import Doctors from './Doctors_Profile/Doctors';

import TopNav from './FirstNavbar/TopNav';

import BookingCard from './Navbar/formBooking/BookingCard';
// import FormComponent from './CountryApi_Form/FormOperate';

import Navbar from './Navbar/Navbar';
import MainSection from './Teatment/MainSection';
import Patient from './Testmonies/Patient';
import FormOperate from './CountryApi_Form/FormOperate';
import Map from './CountryApi_Form/Map.jsx'
import Footer from "./Footer/Footer.jsx"
import Main from './CountryApi_Form/Main.jsx';



function App() {
  return (
    <div className="App ">
     <TopNav />
     {/* <Navbar /> */}
     <BookingCard  />
     {/* <AboutUs />

<MainSection />
<Doctors /> 
<Patient /> */}
{/* <FormOperate /> */}
{/* <Weather /> */}
{/* <FormModules /> */}
  {/* <Main/>
  <Footer /> */}
    </div>
  );
}

export default App;
