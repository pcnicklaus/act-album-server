import {
  CREATE_ACT,
  FETCH_USER_ACTS,
  FETCH_ACT,
  FETCH_ACTS,
  AUTH_USER
 } from '../actions/types';

export default function( state = {}, action) {

  
  switch (action.type) {

    case FETCH_USER_ACTS: 
      return { ...state, userActs: action.payload }
    case FETCH_ACTS:
    console.log('state act reducer', state, 'action act reducer', action);

      return { ...state, communityActs: action.payload }
    case CREATE_ACT:
      return { ...state }
    case FETCH_ACT:
      console.log('state in reducer', state, action.payload)
      return { ...state, activeAct: action.payload }
  }

  return state;
}
