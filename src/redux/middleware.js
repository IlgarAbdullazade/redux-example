import { errorOn } from './actions';
import { COMMENT_CREATE } from './types';

const badWords = ['asshole', 'fuck'];

export function spamFilter(store) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        console.log('middleware > ', action);
        const hasBadWords = badWords.some((res) =>
          action.data.text.includes(res)
        );
        if (hasBadWords) {
          return store.dispatch(errorOn('Be polite'));
        }
      }
      return next(action);
    };
  };
}
