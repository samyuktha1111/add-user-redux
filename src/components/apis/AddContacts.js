import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { ADD_CONTACT } from '../Types';

import './form1.css';

const AddContacts = () => {
  const navigate = useNavigate();
  const initialValues = { name: '', username: '', email: '', phone: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateCredentials(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch({ type: ADD_CONTACT, payload: { formValues } });
      navigate('/contacts');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);
  const validateCredentials = (values) => {
    const errors = {};
    const namevalidation = /^[A-Za-z0-9]{4,16}$/i;
    const usernamevalidation = /^[A-Za-z0-9]{4,16}$/i;
    const emailvalidation = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    // eslint-disable-next-line no-useless-escape

    if (!values.username) {
      errors.username = '!username is required';
    } else if (!usernamevalidation.test(values.username)) {
      errors.username =
        '!username must be from 4-16 char and special char are not allowed';
    }
    if (!values.name) {
      errors.name = '!Name is required';
    } else if (!namevalidation.test(values.name)) {
      errors.name =
        '!name must be from 4-16 char and special char are not allowed';
    }
    if (!values.email) {
      errors.email = '!email is required';
    } else if (!emailvalidation.test(values.email)) {
      errors.email = '!The email is not valid';
    }

    if (!values.phone) {
      errors.phone = '!phone number is required';
    }
    return errors;
  };

  return (
    <div className="container2">
      <form onSubmit={handleSubmit}>
        <div className="container3">
          <div>
            <h1 className="heading">ADD USER</h1>
          </div>
          <div>
            <label className="label1">name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="label2"
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="error1">{formErrors.name}</p>
          </div>
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
            <p className="error1">{formErrors.username}</p>
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
            <p className="error1">{formErrors.email}</p>
          </div>
          <div>
            <label className="label1">Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={formValues.phone}
              className="label2"
              onChange={handleChange}
            />

            <p className="error1">{formErrors.phone}</p>
          </div>

          <div>
            <button className="button2">ADD USER</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddContacts;
