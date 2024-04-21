import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  ADD_USER,
  DELETE_USER,
  GET_ALL_USERS,
  SORT_USERS,
  SORT_USERS_DSC,
  FILTER_USER_A,
  FILTER_USER_I,
  ADD_CONTACT,
  DELETE_CONTACT,
  RESET,
  GET_PRODUCTS,
} from './Types';

function* loginsuccess(action) {
  yield put({ type: 'LOGIN_SUCCESS', payload: action.payload.formValues });
}
function* logoutsuccess() {
  yield put({ type: 'LOGOUT_SUCCESS' });
}
function* addUserSuccess(action) {
  yield put({ type: 'ADD_USER_SUCCESS', payload1: action.payload.formValues });
}
function* deleteUserSuccess(action) {
  yield put({ type: 'DELETE_USER_SUCCESS', payload: action.payload.id });
}
function* sortUsersSuccess(action) {
  yield put({ type: 'SORT_USER_SUCCESS', payload: action.payload.col });
}
function* sortUsersdscSuccess(action) {
  yield put({ type: 'SORT_USER_DSC_SUCCESS', payload: action.payload.col });
}
function* filterUsersasuccess() {
  yield put({ type: 'FILTER_USER_A_SUCCESS' });
}
function* filterUsersisuccess() {
  yield put({ type: 'FILTER_USER_I_SUCCESS' });
}
function* resetsuccess() {
  yield put({ type: 'RESET_SUCCESS' });
}
function* getAllUsers() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    );
    yield put({ type: 'GET_ALL_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'GET_ALL_USERS_FAILURE', message: error.message });
  }
}
function* getProducts() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    );
    yield put({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'GET_PRODUCTS_FAILURE', message: error.message });
  }
}
function* addContacts(action) {
  try {
    const response = yield call(
      axios.post,
      'https://jsonplaceholder.typicode.com/users',
      action.payload.formValues
    );
    yield put({ type: 'ADD_CONTACT_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'ADD_CONTACT_FAILURE', message: error.message });
  }
}
function* deleteContact(action) {
  try {
    yield call(
      axios.delete,
      'https://jsonplaceholder.typicode.com/users/' + action.payload.id
    );
    yield put({ type: 'DELETE_CONTACT_SUCCESS', payload: action.payload.id });
  } catch (error) {
    yield put({ type: 'DELETE_CONTACT_FAILURE', message: error.message });
  }
}
export function* watchUser() {
  yield all(
    [takeEvery(LOGIN, loginsuccess), takeEvery(LOGOUT, logoutsuccess)],
    yield takeEvery(ADD_USER, addUserSuccess),
    yield takeEvery(DELETE_USER, deleteUserSuccess),
    yield takeEvery(SORT_USERS, sortUsersSuccess),
    yield takeEvery(SORT_USERS_DSC, sortUsersdscSuccess),
    yield takeEvery(FILTER_USER_A, filterUsersasuccess),
    yield takeEvery(FILTER_USER_I, filterUsersisuccess),
    yield takeEvery(RESET, resetsuccess),
    yield takeLatest(GET_ALL_USERS, getAllUsers),
    yield takeLatest(GET_PRODUCTS, getProducts),
    yield takeLatest(ADD_CONTACT, addContacts),
    yield takeLatest(DELETE_CONTACT, deleteContact)
  );
}
