import logo from './logo.svg';
///import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Details  from './Pages/Details';
import Letter  from './Pages/Letter';
import DocsVerify from './Pages/DocsVerify';
import ServiceBond from './Pages/ServiceBond';
import BankDetails from './Pages/BankDetails';
import Training from './Pages/Training';
import Policy from './Pages/Policy';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' exact  element={<Home/>}> </Route>
      <Route path='/details' element={<Details/>}> </Route>
      <Route path='/letter' element={<Letter/>}> </Route>
      <Route path='/verify' element={<DocsVerify/>}> </Route>
      <Route path='/service' element={<ServiceBond/>}> </Route>
      <Route path='/policy' element={<Policy/>}> </Route>
      <Route path='/bank' element={<BankDetails/>}> </Route>
      <Route path='/training' element={<Training/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
