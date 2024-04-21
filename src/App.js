import './App.css';
import Loginform from './components/login/Loginform';
import LogoutForm from './components/login/LogoutForm';
import { Provider } from 'react-redux';
import store from './components/store';
import Details from './components/login/Details';
import Contacts from './components/apis/Contacts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddContacts from './components/apis/AddContacts';
import Home from './components/products/Home'
import Tailwind from './components/products/Tailwind';
import Order from './components/products/Order';
import Cart from './components/products/Cart';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Loginform />} />
            <Route exact path="/home" element={<LogoutForm />} />
            <Route exact path="/details" element={<Details />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/add" element={<AddContacts />} />
            <Route exact path="/home1" element={<Home />} />
            <Route exact path="/tailwind" element={<Tailwind />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
