import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  CREATE_ACT,
  FETCH_ACTS,
  FETCH_USER_ACTS,
  FETCH_ACT,
  ACTIVE_ACT,
  TOGGLE_BURGER,
  VOTE,
  FETCH_VOTE_COUNT

} from './types';

// const ROOT_URL = 'https://ACT-server.herokuapp.com';
const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        console.log('response.data SIGNIN', response.data);
        const dataObj = {
          type: AUTH_USER,
          payload: { 
            user: response.data.user, 
            acts: response.data.acts 
          }
        }

        console.log('data object', dataObj)

        dispatch(dataObj);
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'

        // console.log('response', response)

        browserHistory.push('/');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password, name }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password, name })
      .then(response => {

        console.log('response.data SIGNUP', response.data);

        dispatch({ type: AUTH_USER, payload: response.data.user });

        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}


export function fetchUserActs(user_id) {

  console.log('YOOOOOO user id', localStorage.getItem('token'), user_id)

  return function(dispatch) {
    let config = {
        headers: {
          authorization: localStorage.getItem('token'),
        }
      }
    axios
      .get(`${ROOT_URL}/journal/${user_id}`, config)
      .then( res => {
        console.log('res\n', res.data)
        dispatch({
          type: FETCH_USER_ACTS,
          payload: res.data
        })
      })
  }
}


export function createAct(formData, cb) {
  return function(dispatch) {
    console.log('formData', formData)
    axios.post(`${ROOT_URL}/act`, formData, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {

        console.log('create act response in actions/index', response);

        dispatch({
          type: CREATE_ACT,
          payload: response.data
        });
      })
      .then( () => { cb(); });
  }
}

export function fetchActs() {
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {

        console.log('response.data in actions/index', response.data);

        dispatch({
          type: FETCH_ACTS,
          payload: response.data
        });
      });
  }
}

export function fetchAct(id) {
  return function(dispatch){

    console.log('id in actions / fect act', id)

    axios.get(`${ROOT_URL}/act/${id}`, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {

        console.log('response in fecth act', response)

        dispatch({
          type: FETCH_ACT,
          payload: response.data
        });
      });
  }
}

// export function vote(id, formData, cb) {
//   console.log("here!!!")
//   return function(dispatch) {
//     axios.post(`${ROOT_URL}/act,
//           payload: response.data
//         });
//       })
//       .then( () => { cb(); });
//   }
// }
