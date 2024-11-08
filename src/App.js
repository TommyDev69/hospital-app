
import './App.css';

import TopNav from './FirstNavbar/TopNav';
import Info from './Information/Info';
import BookingCard from './Navbar/BookingCard';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App ">
     <TopNav />
     <Navbar />
     <BookingCard  />
{/* <Info /> */}
    </div>
  );
}

export default App;
