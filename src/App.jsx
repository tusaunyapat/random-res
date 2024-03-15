import { useState } from "react";
import Random from "./Random";
import "./App.css";
import AddRestaurant from "./AddRestaurant";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>RANDOM RESTAURANT</h1>
      <Random />
      {/* <AddRestaurant /> */}
    </>
  );
}

export default App;
