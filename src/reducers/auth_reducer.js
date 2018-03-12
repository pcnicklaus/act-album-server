import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:

      console.log('state', state, 'action', action.payload)

      return { ...state, error: '', authenticated: true, user: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false, user: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload, user: false };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
  }

  return state;
}

// _id: '5aa17fe2b7d3e7f996a30d0sa',
// user: '5aa1734a126c22fe7769a401',
// kind: 'do',
// title: 'so there was that thing',
// description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
// image: 