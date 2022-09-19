import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from '../redux/actions';

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button disabled={!props.likes} onClick={props.onDecrementLikes}>
        Dislike
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  const { likesReducer } = state;

  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(likesDispatch) {
  return {
    onIncrementLikes: () => likesDispatch(incrementLikes()),
    onDecrementLikes: () => likesDispatch(decrementLikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
