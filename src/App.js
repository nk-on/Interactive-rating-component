import './App.css';
import { useState } from 'react';
function App() {
  return <><Card /></>;
}
function Card() {
  const [rated,setRated] = useState(false);
  return <div className="Card">
    <ContentPassive rated = {rated} setRated = {setRated}/>
  </div>;
}
function ContentPassive(props) {
  return (
    <>
      <div className="content">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button className="Submit-button">Submit</button>
      </div>
    </>
  );
}

export default App;
