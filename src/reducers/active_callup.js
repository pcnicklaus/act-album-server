import {
  ACTIVE_ACT
 } from '../actions/types';

export default function( state = {}, action) {

  switch (action.type) {
    case ACTIVE_ACT:
      // console.log('in nom reducer action.payload',action.payload)
      return action.payload;
  }

  return state;
}
