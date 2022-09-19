import { useDispatch, useSelector } from 'react-redux';
import { inputText } from '../redux/actions';

function Title() {
  const text = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const titleDispatch = useDispatch();
  function handleInputChange(text) {
    titleDispatch(inputText(text));
  }

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input
          type="text"
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Title;
