import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import MyGigs from './pages/myGigs/MyGigs';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Error from './pages/error/Error';
import Footer from './components/footer/Footer';
import GoToTop from './GoToTop';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <GoToTop />
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/gigs" element={<Gigs />}></Route>
      <Route path="/gig/:id" element={<Gig />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/my-gigs" element={<MyGigs />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/messages" element={<Messages />}></Route>
      <Route path="/message/:id" element={<Message />}></Route>
      <Route path="*" element={<Error />}></Route>
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
