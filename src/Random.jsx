import React, { useEffect, useState } from "react";
import { getRestaurant, resList } from "./Access";

// Checkbox component to handle each restaurant option
function Checkbox({ label, onClick }) {
  return (
    <label>
      <input type="checkbox" onClick={onClick} /> {label}
    </label>
  );
}

// Random element display component
function RandomElement({ element }) {
  return <p>Randomly selected element: {element}</p>;
}

function Random() {
  const [data, setData] = useState({});
  const [arrayToRandom, setArrayToRandom] = useState([]);
  const [randomElement, setRandomElement] = useState();
  const [isClickSiam, setIsClickSiam] = useState(false);
  const [isClickSamyan, setIsClickSamyan] = useState(false);

  useEffect(() => {
    getRestaurant();
  }, []);

  const handleClick = (setState) => setState((isClick) => !isClick);

  const random = () => {
    let tempArray = [];

    if (isClickSamyan) {
      tempArray = tempArray.concat(resList[0].samyan);
    }
    if (isClickSiam) {
      tempArray = tempArray.concat(resList[0].siam);
    }

    setArrayToRandom(tempArray);

    const randomIndex = Math.floor(Math.random() * tempArray.length);
    const randomElement = tempArray[randomIndex];
    setRandomElement(randomElement);
  };

  return (
    <div>
      <p>
        This component is used to check if the database is connected or not.
        Console log data.
      </p>

      <Checkbox label="samyan" onClick={() => handleClick(setIsClickSamyan)} />
      <Checkbox label="siam" onClick={() => handleClick(setIsClickSiam)} />
      <button onClick={random}>RANDOM</button>
      {randomElement && <RandomElement element={randomElement} />}
    </div>
  );
}

export default Random;
