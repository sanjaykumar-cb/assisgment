import './App.css';
import Prime from './components/Prime';
import For from './components/For';
import While from './components/While';
import If from './components/If';
import Switch from './components/Switch';
import Closure from './components/Closure';
import Recursion from './components/Recursion';
import GetElementById from './components/GetElementById';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<ColorSchemesExample />} />
          <Route path='/prime' element={<Prime />} />
          <Route path='/for' element={<For />} />
          <Route path='/while' element={<While />} />
          <Route path='/if' element={<If />} />
          <Route path='/switch' element={<Switch />} />
          <Route path='/closure' element={<Closure />} />
          <Route path='/recursion' element={<Recursion />} />
          <Route path='/get' element={<GetElementById />} />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
