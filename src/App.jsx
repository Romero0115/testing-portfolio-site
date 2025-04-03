import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import NotFound from './components/not_found/NotFound.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import HomePage from './components/home_page/HomePage.jsx';
import MyAccount from './components/my_account/MyAccount.jsx';
import Shop from './components/shop/Shop.jsx';
import Cart from './components/cart/Cart.jsx';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/MyAccount" element={<MyAccount />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
