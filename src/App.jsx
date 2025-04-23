import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./i18n";
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import NotFound from './components/not_found/NotFound.jsx';
import MobileView from "./components/mobile_view/MobileView.jsx";
import Navbar from './components/navbar/Navbar.jsx';
import HomePage from './components/home_page/HomePage.jsx';
import LogIn from './components/log_in/LogIn.jsx';
import SignUp from './components/sign_up/SignUp.jsx';
import MyAccount from './components/my_account/MyAccount.jsx';
import Shop from './components/shop/Shop.jsx';
import Cart from './components/cart/Cart.jsx';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
        <Navbar />
          {isDesktop}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/log-in"
              element={isDesktop ? <LogIn /> : <MobileView />}
            />
            <Route
              path="/sign-up"
              element={isDesktop ? <SignUp /> : <MobileView />}
            />
            <Route
              path="/my-account"
              element={isDesktop ? <MyAccount /> : <MobileView />}
            />
            <Route
              path="/shop"
              element={isDesktop ? <Shop /> : <MobileView />}
            />
            <Route
              path="/cart"
              element={isDesktop ? <Cart /> : <MobileView />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;