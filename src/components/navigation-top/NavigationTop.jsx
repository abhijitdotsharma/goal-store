import './navigation-top.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { useCart } from '../../context/cart-context';
import { useState } from 'react';
import { useVoice } from '../../context/audio-context';

export default function NavigationTop() {
  const [sidebarOn, setSidebarOn] = useState(false);

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { cart } = useCart();

  const [voiceInput, setVoiceInput] = useState('')

  const { isRecording, setIsRecording, voiceNote } = useVoice();

  function logoutHandler() {
    // clean local storage
    localStorage.clear();
    // navigate to homepage
    navigate('/');
    setIsLoggedIn((prev) => (prev = false));
  }

  function handleStartRecording() {
    //mic is off till this moment
    // while this is on, disable the input?
    setIsRecording((prev) => !prev);
  }

  function handleStopRecording() {
    // voiceNote has the task till this is fired
    // when fired, change mic state and set this task as user.focus
    setIsRecording((prev) => !prev);
    setVoiceInput(voiceNote);
    // setUser("focus", voiceNote)
  }

  return (
    <nav className="navbar">
      <Link className="nav-heading" to="/">
        Goal Store
      </Link>
      <div className={sidebarOn ? `nav-items active` : `nav-items`}>
        <div style={{position: 'relative', marginRight: 'auto'}}>
          <input
            className="nav-input"
            type="text"
            placeholder="Search from a range of merch"
            value={voiceInput}
          />
          {isRecording ? (
            <i
              onClick={handleStopRecording}
              className="mic--on fal fa-microphone"
              style={{position: 'absolute', top: '16px'}}
            ></i>
          ) : (
            <i
              onClick={handleStartRecording}
              className="mic--off  fal fa-microphone-slash"
              style={{position: 'absolute', top: '16px'}}
            ></i>
          )}
        </div>
        <div className="nav-right">
          {isLoggedIn ? (
            <button
              className="nav-btn logout"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-btn">
              Login
            </Link>
          )}

          <Link to="/wishlist" className='cart-badge'>
            <i className="fal fa-heart wishlist"></i>
            <span class="badge-notification">{cart?.wishlist?.length || 0}</span>
          </Link>
          <Link to="/cart" className="cart-badge">
            <i className="fal fa-shopping-cart cart"></i>
            <span class="badge-notification">{cart.cartCount}</span>
          </Link>
        </div>
      </div>
      <div
        className="ham-btn"
        onClick={() => setSidebarOn((prev) => !prev)}
      >
        <i class="fal fa-bars"></i>
      </div>
    </nav>
  );
}
