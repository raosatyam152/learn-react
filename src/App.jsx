
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Food from './components/food.jsx'
import Card from './Cards/card.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './button/button.jsx'


function App() {
  
    return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<><Header /><Button/></>} />
        <Route path="/about" element={<Card/>} />
        <Route path="/fav" element={<Food />} />
      </Routes>
    </Router>
      <Footer/>
    </>
    );
}

export default App

