import './App.css';
import { useState } from 'react';
import ContentActive from './components/ContentActive/ContentActive';
function App() {
  return (
    <>
      <Card />
    </>
  );
}
function Card() {
  const [clicked, setClicked] = useState(false);
  const [chosenRating, setChosenRating] = useState(undefined);
  if (!chosenRating || !clicked) {
    return (
      <div className="Card">
        <ContentPassive
          clicked={clicked}
          setClicked={setClicked}
          chosenRating={chosenRating}
          setChosenRating={setChosenRating}
        />
      </div>
    );
  } else {
    return (
      <div className="Card">
        <ContentActive chosenRating={chosenRating} />
      </div>
    );
  }
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
              <button
                key={num}
                onClick={() => {
                  props.setChosenRating(num);
                }}
              >
                {num}
              </button>
            );
          })}
        </div>
        <button
          className="Submit-button"
          onClick={() => {
            if (!props.chosenRating) {
              return;
            } else {
              props.setClicked(!props.clicked);
            }
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default App;
