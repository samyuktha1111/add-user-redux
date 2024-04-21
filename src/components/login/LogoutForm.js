import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../Types';
import Loginform from './Loginform';
import './form.css';
const mapStateToProps = (state) => {
  return {
    person: state.user.user,
  };
};
const LogoutForm = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className="container1">
      {props.person ? (
        <div>
          <div className="content1">WELCOME-{props.person.username}</div>
          <button className="button1" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <Loginform />
      )}
    </div>
  );
};

export default connect(mapStateToProps)(LogoutForm);
