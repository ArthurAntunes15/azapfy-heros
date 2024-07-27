import "./index.scss";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import fetchHerosAPI from "../../services/heroService";

function Header() {
  
  const navigate = useNavigate();

  const goToStart = () => {
    navigate("/");
  };

  const containsSubset = (str1, str2) => {
    const charsInEl = new Set(str1.split(''));
    return str2.split('').every(char => charsInEl.has(char));
  };
  
  const search = (event) => {
    let el = event.target.value.toLowerCase();
    const matchingHeroes = heros.filter(hero => {
      const relevantPartOfSlug = hero.slug.toLowerCase().split('-')[1];
      return containsSubset(el, relevantPartOfSlug);
    });
    console.log(matchingHeroes);
  };

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
      <div className="main-header">
        <div className="main-header_logo" onClick={goToStart}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
          <input type="text" placeholder="Pesquisar" onChange={search} />
        </div>
      </div>
  );
}

export default Header;
