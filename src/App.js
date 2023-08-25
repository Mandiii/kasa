import './styles/_variables.scss'
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/logement/:id' element={<Logement />}/>
        <Route path='/*' element={<NoPage />}/>
      </Routes>
      <Footer/>
    </>
    )
}

export default App;
