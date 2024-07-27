import React, { useEffect, useState } from "react";
import "./index.scss";
import fetchHerosAPI from "../../services/heroService";


function Cards() {
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    const fetchHeros = async () => {
      try {
        const data = await fetchHerosAPI();
        setHeros(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHeros();
  }, []);

  return (
    <div className="container-Card">
        {heros.map((hero) => (
          <div className="containerCard" key={hero.id}>
            <img
              src={hero.images.md}
              alt={`Image: ${hero.title}`}
            />
            <label>{hero.name}</label>
          </div>
        ))}
    </div>
  );
}

export default Cards;
