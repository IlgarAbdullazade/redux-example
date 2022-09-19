import { INCREMENT, DECREMENT } from '../redux/types';

const initialState = {
  likes: 0,
};

export const likesReducer = (state = initialState, action) => {
  console.log('likesReducer > ', action);

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case DECREMENT:
      return {
        ...state,
        likes: state.likes ? state.likes - 1 : state.likes,
      };
    default:
      return state;
  }
};
