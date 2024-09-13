import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Main from './components/pages/Main/Main';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
