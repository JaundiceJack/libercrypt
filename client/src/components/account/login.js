// Import basics
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// Import router stuff
import { Redirect, Link } from 'react-router-dom';
// Import server actions
import { login, changePage } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
// Import components
import TextEntry from '../inputs/textEntry';
// Import style presets
import { submitClasses,     cardContainerClasses,
         headerTextClasses, hrCenterClasses, errorMsgClasses } from '../tailwinds';

const Login = () => {
  const [email,      setEmail]      = useState("");
  const [password,   setPassword]   = useState("");
  const [badEntries, setBadEntries] = useState([]);
  // Get the authentication state and submission errors
  const isAuthenticated = useSelector( state => state.auth.isAuthenticated );
  const errorMsg        = useSelector( state => state.error.msg.msg );

  // Clear the badEntries after the timer runs out
  const dispatch = useDispatch();
  const updateTimer = useRef(null);
  const setUpdate = () => { updateTimer.current = setTimeout(() => {
    dispatch(clearErrors());
    setBadEntries([]);
    updateTimer.current = null; }, 5000);
  }
  // Update errors from the server
  useEffect(() => { !updateTimer.current && setUpdate() }, [errorMsg]);
  // Clear the timer on unmount
  useEffect(() => { return () => {
    updateTimer.current && clearTimeout(updateTimer.current); }; }, []);

  // On form submission, attempt to log in
  const onSubmit = e => {
    e.preventDefault();
    // Validate entries
    let errs = [];
    if (email === "" || email === null)
      errs.push("Please enter a valid email address.");
    if (password === "" || password === null)
      errs.push("Please enter a password.");
    if (password.length > 0 && password.length < 8)
      errs.push("Passwords must be at least 8 characters in length.");
    setBadEntries(errs);
    // Attempt logging in
    if (errs.length === 0) {
      const currentUser = {
        email:    email,
        password: password
      };
      dispatch(login(currentUser));
    }
    // If there were entry errors, display them for 5 seconds
    else { !updateTimer.current && setUpdate(); }
  }
  const changeActive = nextPage => { dispatch(changePage(nextPage)) }

  return (
    <section className="mt-6 flex items-center justify-center mb-6 h-full">
      <form className={cardContainerClasses + "w-full sm:w-1/2"} onSubmit={onSubmit}>
        <div className="rounded-t-lg p-2 shadow-2xl grid grid-cols-3 text-center items-center">
          <h2 className={headerTextClasses+"col-start-2 col-end-3"}>
            Login
          </h2>
          <Link className="col-start-3 col-end-4 text-right mr-2" to="/forgot" onClick={() => changeActive('forgot')}>
            <p className="ml-4 font-jose text-sm text-blue-200">Forgot password?</p>
          </Link>
        </div>
        <div className={hrCenterClasses}></div>
        <div className="p-4 grid gap-2">
          <TextEntry id="email"
                     text="Email"
                     type="email"
                     onChange={e => setEmail(e.target.value)} />
          <TextEntry id="password"
                     text="Password"
                     type="password"
                     onChange={e => setPassword(e.target.value)} />
          { badEntries.map(err => <div className={errorMsgClasses}> {err} </div> )  }
          { errorMsg && <div className={errorMsgClasses}> {errorMsg} </div> }




          <button className={submitClasses+"mt-4"} type="submit">
            <p>Login</p>
          </button>
        </div>
      </form>
      {isAuthenticated && <Redirect to="/manage" />}
    </section>
  );

};

// Set prop types and export
Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  error:           PropTypes.object.isRequired,
  changePage:      PropTypes.func,
  login:           PropTypes.func.isRequired
}
export default Login;
