
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Food from './components/food.jsx'
import Card from './Cards/card.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './button/button.jsx'
import Student from './components/student.jsx';
import UserGreeting from './components/UserGreetings.jsx';
import './App.css';
import List from './components/list/list.jsx';
import MyComponent from './components/UseComponents/UseState.jsx';
import Counter from './components/UseComponents/counter.jsx';
import OnChange from './components/UseComponents/OnChange.jsx';
import ColorPicker from './components/UseComponents/ColorPicker.jsx';
import UpdateOBJ from './components/list/UpdateOBJ.jsx';
import UpdateArr from './components/list/updateArrayState.jsx';
import UpdateArrOBJ from './components/list/updateArrOBJ.jsx';
import ToDoList from './ToDoListApp/ToDo.jsx';
import Effect from './components/UseComponents/useEffect.jsx';

function App() {
  // Sample data for the list component  
     const items = [{id:0, component:'monitor', price: 200},
                    {id:1, component:'CPU', price: 300},
                    {id:2, component:'Keyboard', price: 100},
                    {id:3, component:'Mouse', price: 50},
                    {id:4, component:'Printer', price: 150}];
      const parts = [{id:0, component:'monitor', price: 200},
                    {id:1, component:'CPU', price: 300},
                    {id:2, component:'Keyboard', price: 100},
                    {id:3, component:'Mouse', price: 50},
                    {id:4, component:'Printer', price: 150}];
    return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<><Header /><Button/></>} />
        <Route path="/about" element={<><Card/></>} />
        <Route path="/fav" element={<Food />} />
        <Route path="/props" element={<><Student name="Satyam" age={19} isStudent={true} />
        <Student name="Yaman" age={21} isStudent={false} />
        <Student name="Monu" age={19} isStudent={true} /><a href="/">Home</a></>} />
        <Route path="/user" element={<><UserGreeting isloggedIn={true} username="Satyam" /></>} />
        <Route path="/list" element={<><List item={items} category="Computer parts" />
        <List item={parts} category="Printer parts" /><UpdateOBJ/><UpdateArr/><UpdateArrOBJ/><a href="/">Home</a></>} />
        <Route path="/use" element={<>
        <h1>Use State Example</h1>
        <Counter/><MyComponent/><OnChange/><ColorPicker/><a href="/">Home</a></>} />
        <Route path="/todo" element ={<ToDoList/>}/>
        <Route path="/effect" element={<Effect/>}/>
      </Routes>
    </Router>
    
      <Footer/>
    </>
    );
}

export default App

