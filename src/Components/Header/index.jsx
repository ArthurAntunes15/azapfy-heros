import "./index.scss";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import fetchHerosAPI from "../../services/heroService";

function Header() {
  
  const navigate = useNavigate();

  const goToStart = () => {
    navigate("/");
  };

  const search = (event) => {
    let el = event.target.value
    
  }

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
console.log(heros)
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
