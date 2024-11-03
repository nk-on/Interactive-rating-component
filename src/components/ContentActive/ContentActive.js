import './contnentActive.css';
import image from './image.svg';
export default function ContentActive() {
  return (
    <>
      <div className="image-container">
        <div className="image">
          <img src={image} alt="image"></img>
        </div>
        <div className="selectedRating-container">
          you have choosen 4 from 5
        </div>
        <h1 className="title">Thank you</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
