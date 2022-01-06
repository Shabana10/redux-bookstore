
import Home  from './pages/Home';
import AddForm from './pages/AddForm';
import List from './pages/List';
import Navbar from './components/Navbar';
import HomeTop from './components/HomeTop';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HomeTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addform' element={<AddForm />} />
          <Route path='/list' element={<List />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
