import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Landingpage from './Pages/Landingpage/landingpage';
import Searchpage from './Pages/Searchpage/searchpage';
import MyBookings from './Pages/Bookingpage/booking';
import { SnackbarProvider } from 'notistack';

function App() {

  return (
    <Router>
      <SnackbarProvider maxSnack={2} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/search' element={<Searchpage/>} />
        <Route path='/mybookings' element={<MyBookings/>} />
        
      </Routes>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
