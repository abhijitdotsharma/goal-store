import "./App.css";
import {Routes, Route} from "react-router-dom";
import {CartPage, LandingPage, LoginPage, ProductPage, SignupPage, WishlistPage} from "./pages/";
import Mockman from "mockman-js";
import RequiresAuth from "./components/RequiresAuth";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />}/>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/mock" element={<Mockman/>} />

        {/* private routes */}
        <Route path="/cart" element={
          <RequiresAuth>
            <CartPage/>
          </RequiresAuth>
        } />

        <Route path="/wishlist" element={
          <RequiresAuth>
            <WishlistPage/>
          </RequiresAuth>
        } />

      </Routes>
    </div>
  );
}

export default App;
