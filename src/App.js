import './App.css';
import Accueil from './components/Accueil'
import {BrowserRouter, Route} from 'react-router-dom'
import Peugeot from './components/Peugeot'
import Menu from './components/Menu';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Route path="/accueil" component={Accueil}></Route>
      <Route path="/Peugeot" component={Peugeot}></Route>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;


