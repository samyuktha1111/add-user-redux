import {
  GET_ALL_USERS,
  DELETE_CONTACT,
  SORT_USERS,
  SORT_USERS_DSC,
} from '../Types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import './form1.css';

const Contacts = ({ contacts }) => {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('ASC');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ALL_USERS });
  }, []);
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const sortHandler = (col) => {
    if (order === 'ASC') {
      dispatch({ type: SORT_USERS, payload: { col } });
      setOrder('DSC');
    }
    if (order === 'DSC') {
      dispatch({ type: SORT_USERS_DSC, payload: { col } });
      setOrder('ASC');
    }
  };
  const handleDelete = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: { id } });
  };
  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="search"
          className="form-control"
          style={{ marginTop: 50, marginBottom: 20, width: '40%' }}
          onChange={(e) => searchHandler(e)}
        />
        <h1>User Details</h1>
      </div>
      <div className="container mt-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th className="click1" onClick={() => sortHandler('name')}>
                name
              </th>
              <th className="click1" onClick={() => sortHandler('username')}>
                username
              </th>
              <th className="click1" onClick={() => sortHandler('email')}>
                email
              </th>
              <th>phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts
              // eslint-disable-next-line array-callback-return
              .filter((val) => {
                if (search === '') {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase()) ||
                  val.username.toLowerCase().includes(search.toLowerCase()) ||
                  val.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((detail, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{detail.name}</td>
                  <td>{detail.username}</td>
                  <td>{detail.email}</td>
                  <td>{detail.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(detail.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.user.contacts);
  return {
    contacts: state.user.contacts,
  };
};
export default connect(mapStateToProps)(Contacts);
