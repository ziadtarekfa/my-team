
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import Header from './components/Header';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';



function App() {
  return (

    <Router>
      <div className="App">


        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />\
          <Route path='/contact' element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
