import Card from "../Card";
import "./Home.css";
import data from "../../assets/data";
import { useState } from "react";

function Home() {
  const [value, setValue] = useState("...");

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }
  52;
  const filterdArray =
    value !== "..." ? data.filter((el) => el.type.includes(value)) : data;
  return (
    <>
      <select onChange={handleSelect}>
        <option>...</option>
        <option>Good</option>
        <option>Evil</option>
      </select>

      <section className="card-section">
        {filterdArray.map((el) => {
          return (
            <Card key={el.imgSrc} character={el.Character} imgSrc={el.imgSrc} />
          );
        })}
      </section>
    </>
  );
}

export default Home;
