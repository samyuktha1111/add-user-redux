import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useNavigate } from 'react-router';
import { LOGIN, ADD_USER } from '../Types';
import './form.css';

const Loginform = () => {
  const navigate = useNavigate();
  const initialValues = { username: '', email: '', password: '', status: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [type, setType] = useState('password');

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_USER, payload: { formValues } });
    navigate('/details');
  };
  const handleToggle = () => {
    type === 'password' ? setType('text') : setType('password');
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch({ type: LOGIN, payload: { formValues } });
      navigate('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const usernamevalidation = /^[A-Za-z0-9]{4,16}$/i;
    const emailvalidation = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    // eslint-disable-next-line no-useless-escape
    const passwordvalidation =
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;
    if (!values.username) {
      errors.username = '!username is required';
    } else if (!usernamevalidation.test(values.username)) {
      errors.username =
        '!username must be from 4-16 char and special char are not allowed';
    }
    if (!values.email) {
      errors.email = '!email is required';
    } else if (!emailvalidation.test(values.email)) {
      errors.email = '!The email is not valid';
    }
    if (!values.password) {
      errors.password = '!password is required';
    } else if (!passwordvalidation.test(values.password)) {
      errors.password =
        '!The password must have min 1 uppercase,1 lowercase,1 numeric char,1 special char,must be 8 char or longer';
    }
    if (!values.status) {
      errors.status = '!status is required';
    }
    return errors;
  };

  return (
    <div className="container2">
      <form onSubmit={handleSubmit}>
        <div className="container3">
          <h1 className="heading">LOGIN FORM</h1>
          <div>
            <label className="label1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="label2"
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="errorfield">{formErrors.username}</p>
          </div>
          <div>
            <label className="label1">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formValues.email}
              className="label2"
              onChange={handleChange}
            />
            <p className="errorfield">{formErrors.email}</p>
          </div>
          <div>
            <label className="label1">Password</label>

            <input
              type={type}
              name="password"
              placeholder="password"
              value={formValues.password}
              className="label2"
              onChange={handleChange}
            />
            <span className="icon1" onClick={handleToggle}>
              <Icon icon={type === 'password' ? eyeOff : eye} />
            </span>
            <p className="errorfield">{formErrors.password}</p>
          </div>
          <div>
            <label className="label1">Status</label>
            <input
              type="text"
              name="status"
              placeholder="username"
              className="label2"
              value={formValues.status}
              onChange={handleChange}
            />
            <p className="errorfield">{formErrors.status}</p>
          </div>
          <div>
            <button className="button2">LOGIN</button>
          </div>
        </div>
      </form>
      <div>
        <button className="button2" onClick={handleUser}>
          Add user
        </button>
      </div>
    </div>
  );
};
export default Loginform;
