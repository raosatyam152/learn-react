
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Food from './components/food.jsx'
import Card from './Cards/card.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './button/button.jsx'
import Student from './components/student.jsx';
import UserGreeting from './components/UserGreetings.jsx';
import './App.css';


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
        <Student name="Monu" age={19} isStudent={true} /></>} />
        <Route path="/user" element={<><UserGreeting isloggedIn={true} username="Satyam" /></>} />
      </Routes>
    </Router>
      <Footer/>
    </>
    );
}

export default App

