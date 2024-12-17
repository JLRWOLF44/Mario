import Card from "../Card";
import "./Home.css";
import data from "../../assets/data";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <section className="card-section">
        {data.map((el) => {
          return (
            <Card key={el.imgSrc} character={el.Character} imgSrc={el.imgSrc} />
          );
        })}
      </section>
      <button onClick={handleCount} id="count">
        Mon Score : {count}{" "}
      </button>
    </>
  );
}

export default Home;
