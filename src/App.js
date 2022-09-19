import { useSelector } from 'react-redux';
import './App.css';
import Comments from './components/Comments';
import Likes from './components/Likes';
import Title from './components/Title';

function App() {
  const error = useSelector((state) => state.appReducer.error);

  return (
    <div className="app">
      <div className="wrap">
        <div className="card">
          {error && <div className="error-message">{error}</div>}
          <div className="card-image">
            <img src="./redux-architecture.png" alt="architecture" />
            <Likes />
            <Title />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
