import {
  COMMENTS_LOAD,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
} from './types';

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log('commentsReducer > ', action);

  switch (action.type) {
    case COMMENTS_LOAD:
      const commentsNew = action.data.map((c) => {
        return {
          id: c.id,
          text: c.body,
        };
      });
      return {
        ...state,
        comments: commentsNew,
      };
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      return {
        ...state,
        comments: comments.map((c) =>
          c.id === data.id ? { ...c, text: data.text } : { ...c }
        ),
      };
    case COMMENT_DELETE:
      return {
        ...state,
        comments: state.comments.filter((c) => c.id !== action.id),
      };

    default:
      return state;
  }
};
