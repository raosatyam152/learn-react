
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Food from './components/food.jsx'
import Card from './Cards/card.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './button/button.jsx'
import Student from './components/student.jsx';


function App() {
  
    return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<><Header /><Button/></>} />
        <Route path="/about" element={<Card/>} />
        <Route path="/fav" element={<Food />} />
        <Route path="/props" element={<><Student name="Satyam" age={19} isStudent={true} />
        <Student name="Yaman" age={21} isStudent={false} />
        <Student name="Monu" age={19} isStudent={true} /> <Student name="Larry"/>       
        </>} />
      </Routes>
    </Router>
      <Footer/>
    </>
    );
}

export default App

