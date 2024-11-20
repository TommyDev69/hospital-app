
import AboutUs from './About Us/AboutUs';
import './App.css';
import Doctors from './Doctors_Profile/Doctors';

import TopNav from './FirstNavbar/TopNav';
import Info from './Information/Info';
import CauroselDisplay from './Navbar/CauroselDisplay';
import BookingCard from './Navbar/formBooking/BookingCard';
import Receipt from './Navbar/formBooking/Receipt';
import Navbar from './Navbar/Navbar';
import MainSection from './Teatment/MainSection';

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

    </div>
  );
}

export default App;
