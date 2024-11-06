export default function ContentPassive(props) {
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