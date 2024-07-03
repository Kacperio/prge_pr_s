import React from "react";
import "./Details.css";
import kk from "./kitty.jpeg";

function Detail() {
  return (
    <div className="dd">
      <div className="left">
        <img className="img1" src={kk} alt="cuś"></img>
      </div>
      <div className="right">
        <div className="r1">
          <h1 className="tittle">Krótko o tym tworze</h1>
          <p className="ttt">
            Strona internetowa „Kocie Jednostki Wojskowe” przenosi Cię do
            fascynującego świata, gdzie koty przejęły rolę obrońców i strażników
            swoich terytoriów. Witryna prezentuje szczegółowe informacje na
            temat umiejscowienia różnych jednostek wojskowych, w których służą
            kocie bataliony, oraz przynależnych im kocich żołnierzy.
          </p>
          <hr></hr>
        </div>
        <div className="r2">
          <h3 className="tittle">Możliwości strony</h3>
          <ol>
            <li>
              Mapa Jednostek Wojskowych
              <ul>
                <li>Szczegółowa mapa z zaznaczonymi jednostkami wojskowymi.</li>
                <li>
                  Klikalne punkty na mapie, które prowadzą do opisów
                  poszczególnych jednostek.
                </li>
                <li>
                  Informacje o lokalizacji, liczebności i specjalizacji każdej
                  jednostki.
                </li>
              </ul>
            </li>
            <li>
              Jednostki Wojskowe
              <ul>
                <li>
                  Lista wszystkich jednostek wraz z ich nazwami i symbolami.
                </li>
                <li>opisy każdej jednostek</li>
              </ul>
            </li>
            <li>
              Kocie Bataliony i Żołnierze
              <ul>
                <li>Profile indywidualnych kocich żołnierzy</li>
                <li>Opisy ich ról, umiejętności i osiągnięć.</li>
                <li>Galeria z portretami oraz zdjęciami z misji</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Detail;
