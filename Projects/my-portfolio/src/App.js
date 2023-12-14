import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} >

          <Route path='about' element={<About/>}/>
          <Route path='skills' element={<Skills/>} />
          <Route path='experience' element={<Experience/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contacts/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
