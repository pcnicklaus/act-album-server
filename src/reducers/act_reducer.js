import {
  CREATE_ACT,
  FETCH_USER_ACTS,
  FETCH_ACT,
  FETCH_ACTS
 } from '../actions/types';

export default function( state = {}, action) {

  
  switch (action.type) {

    case FETCH_USER_ACTS: 
      return { ...state, userActs: action.payload }
    case FETCH_ACTS:
    console.log('state', state, 'action', action);

      return { ...state, communityActs: action.payload }
    case CREATE_ACT:
      return { ...state }
    case FETCH_ACT:
      return { ...state, activeAct: action.payload }
  }

  return state;
}
