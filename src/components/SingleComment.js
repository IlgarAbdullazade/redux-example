import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from '../redux/actions';

function SingleComment(props) {
  const { id, text } = props;
  const [commentText, setCommentText] = useState('');
  const commentDispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  function handleFormUpdate(event) {
    event.preventDefault();
    if (commentText.length) {
      commentDispatch(commentUpdate(commentText, id));
    }
  }

  function handleInputChange(text) {
    setCommentText(text);
  }

  function handleCommentDelete() {
    commentDispatch(commentDelete(id));
  }

  return (
    <form onSubmit={handleFormUpdate} className="comments-item">
      <div onClick={handleCommentDelete} className="comments-item-delete">
        &times;
      </div>
      <input
        type="text"
        value={commentText}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
