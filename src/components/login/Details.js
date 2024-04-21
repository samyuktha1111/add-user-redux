import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import {
  DELETE_USER,
  SORT_USERS,
  SORT_USERS_DSC,
  FILTER_USER_A,
  FILTER_USER_I,
  RESET,
} from '../Types';

const mapStateToProps = (state) => {
  console.log(state.user.users);
  return {
    details: state.user.users,
    usersFilteredData: state.user.users1,
  };
};
// eslint-disable-next-line react-hooks/rules-of-hooks

const Details = ({ details, usersFilteredData }) => {
  const getUserDetails = (data) =>
    data.map((detail, index) => (
      <tr>
        <th>{index + 1}</th>
        <td>{detail.username}</td>
        <td>{detail.email}</td>
        <td>{detail.status}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  const [display, setDisplay] = useState(false);
  const [order, setOrder] = useState('ASC');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/');
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };

  const activeHandler = () => {
    dispatch({ type: FILTER_USER_A });
    setDisplay(true);
  };
  const inactiveHandler = () => {
    dispatch({ type: FILTER_USER_I });
    setDisplay(true);
  };
  const resetHandler = () => {
    dispatch({ type: RESET });
    setDisplay(false);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    setDisplay(false);
  };
  const sortHandler = (col) => {
    setDisplay(false);
    if (order === 'ASC') {
      dispatch({ type: SORT_USERS, payload: { col } });
      setOrder('DSC');
    }
    if (order === 'DSC') {
      dispatch({ type: SORT_USERS_DSC, payload: { col } });
      setOrder('ASC');
    }
  };
  let userDetails = [];

  if (!display) {
    userDetails = getUserDetails(
      // eslint-disable-next-line array-callback-return
      details.filter((val) => {
        if (search === '') {
          return val;
        } else if (
          val.username.toLowerCase().includes(search.toLowerCase()) ||
          val.email.toLowerCase().includes(search.toLowerCase())
        ) {
          return val;
        }
      })
    );
  } else {
    userDetails = getUserDetails(usersFilteredData);
  }

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={(e) => searchHandler(e)}
        />
        <h1>User Details</h1>
        <button className="btn btn-primary float-right" onClick={handleAdd}>
          Add user
        </button>
      </div>
      <div className="container mt-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th className="click1" onClick={() => sortHandler('username')}>
                name
              </th>
              <th className="click1" onClick={() => sortHandler('email')}>
                email
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{userDetails}</tbody>
        </table>
      </div>
      <h2>Filter By</h2>
      <button className="btn btn-primary float-right" onClick={activeHandler}>
        Active
      </button>
      <button className="btn btn-danger" onClick={inactiveHandler}>
        Inactive
      </button>
      <button className="btn btn-primary float-right" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
export default connect(mapStateToProps)(Details);
