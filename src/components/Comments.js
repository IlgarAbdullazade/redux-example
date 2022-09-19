import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { commentCreate, commentsLoad } from '../redux/actions';
import SingleComment from './SingleComment';
import Spin from './Spin';

function Comments() {
  const [commentText, setCommentText] = useState('');

  const commentsDispatch = useDispatch();
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const spinner = useSelector((state) => {
    const { appReducer } = state;
    return appReducer.loading;
  });

  useEffect(() => {
    commentsDispatch(commentsLoad());
  }, [commentsDispatch]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (commentText.length) {
      commentsDispatch(commentCreate(commentText, uuidv4()));
      setCommentText('');
    }
  }

  function handleInputChange(text) {
    setCommentText(text);
  }

  return (
    <div className="card-comments">
      <form onSubmit={handleFormSubmit} className="comments-item-create">
        <input
          type="text"
          value={commentText}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <input type="submit" hidden />
      </form>
      {spinner && (
        <div className="loader-styles">
          <Spin />
        </div>
      )}
      {comments &&
        comments.map((comment) => (
          <SingleComment key={comment.id} {...comment} />
        ))}
    </div>
  );
}

export default Comments;
