import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";


function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer enter your api",
    },
  };

  const handleWheel = (event) => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    const ref = cardsRef.current;
    ref.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      ref.removeEventListener("wheel", handleWheel);
    };
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div className="card skeleton-card" key={i}>
                <div className="img-container skeleton"></div>
                <p className="skeleton-text"></p>
              </div>
            ))
          : apiData.map((card, index) => (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <div className="img-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                    alt={card.original_title}
                    loading="lazy"
                  />
                </div>
                <p>{card.original_title}</p>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default TitleCards;
