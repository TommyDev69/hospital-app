
import AboutUs from './About Us/AboutUs';
import './App.css';
import FormModule from './CountryApi_Form/FormModule';
import Doctors from './Doctors_Profile/Doctors';

import TopNav from './FirstNavbar/TopNav';

import BookingCard from './Navbar/formBooking/BookingCard';

import Navbar from './Navbar/Navbar';
import MainSection from './Teatment/MainSection';
import Patient from './Testmonies/Patient';

function App() {
  return (
    <div className="App ">
     <TopNav />
     <Navbar />
     <BookingCard  />
<AboutUs />
{/* <Receipt /> */}
<MainSection />
<Doctors /> 
<Patient />
<FormModule />
{/* <FormModules /> */}
    </div>
  );
}

export default App;
