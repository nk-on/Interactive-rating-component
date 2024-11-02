import './App.css';
import { useState } from 'react';
import contentActive from './components/contentActive/contentActive';
function App() {
  return (
    <>
      <Card />
    </>
  );
}
function Card() {
  const [rated, setRated] = useState(false);
  return (
    <div className="Card">
      <ContentPassive rated={rated} setRated={setRated} />
    </div>
  );
}
function ContentPassive(props) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="content">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="buttons">
          {numbers.map((num) => {
            return (
              <button key={num} onClick={() => props.setRated(!props.rated)}>
                {num}
              </button>
            );
          })}
        </div>
        <button className="Submit-button">Submit</button>
      </div>
    </>
  );
}
export default App;
