import React from "react";
import "./Team.css";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";

const Team = () => {
  return (


    <body>
      <Header />
    <div class="container">
      <div class="main-content">
        
        <div class="card">
          <img src="https://i.ytimg.com/vi/2gl440gLUCQ/maxresdefault.jpg" alt="señulo de lubinas" />
          <div class="card-content">
            <div>
              <small><strong>Fotos de Pesca</strong></small>
              <h3>Mejores Señuelos para pescar Lubinas</h3>
              <small>📅 28/03/2025 | 🧑‍🤝‍🧑 Equipo Formula Pesca</small>
              <p>En este artículo trataremos sobre cuáles son los mejores señuelos para pescar lubinas. Es un poco difícil determinar qué tipo...</p>
            </div>
            <button class="button">Leer más</button>
          </div>
        </div>
  
        <div class="card">
          <img src="https://i.ytimg.com/vi/zTxIqzeX24E/maxresdefault.jpg" alt="señuelo de Rock" />
          <div class="card-content">
            <div>
              <small><strong>Material de pesca</strong></small>
              <h3>Mejores Señuelos Rockfishing</h3>
              <small>📅 25/03/2025 | 🧑‍🤝‍🧑 Equipo Formula Pesca</small>
              <p>Los señuelos que existen para la pesca rockfishing o spinning ultraligero son miles. Muchísimas marcas, tipos, colores, tamaños, etc...</p>
            </div>
            <button class="button">Leer más</button>
          </div>
        </div>
  
        <div class="card">
          <img src="https://espesca.com/storage/La-pesca-del-atun-trucos-y-t%C3%A9cnicas.jpg" alt="caña de pesca de atunes" />
          <div class="card-content">
            <div>
              <small><strong>Fotos de Pesca</strong></small>
              <h3>Caña Pesca del Atún desde Embarcación</h3>
              <small>📅 20/03/2025 | 🧑‍🤝‍🧑 Equipo Formula Pesca</small>
              <p>La pesca del atún desde embarcación requiere de equipos potentes, fiables y de calidad. Existen diferentes modalidades...</p>
            </div>
            <button class="button">Leer más</button>
          </div>
        </div>
  
      </div>
  
      <div class="sidebar">
  
        <div class="search-box">
          <input type="text" placeholder="Buscar ..." />
          <button>Buscar</button>
        </div>
  
        <div class="guides">
          <h3>Guías de productos</h3>
          <ul>
            <li><a href="#">Mejores cañas de pescar</a></li>
            <li><a href="#">Tipos de cañas de pescar</a></li>
            <li><a href="#">Mejores marcas de cañas de pescar</a></li>
            <li><a href="#">Las mejores cañas de eging</a></li>
            <li><a href="#">Las mejores cañas spinning</a></li>
            <li><a href="#">Las mejores cañas rockfishing</a></li>
            <li><a href="#">Los mejores carretes rockfishing</a></li>
            <li><a href="#">Las mejores cañas surfcasting</a></li>
            <li><a href="#">Los mejores carretes de surfcasting</a></li>
            <li><a href="#">Los mejores carretes spinning</a></li>
            <li><a href="#">Los mejores señuelos para trucha</a></li>
            <li><a href="#">Las mejores cucharillas para pescar</a></li>
          </ul>
        </div>
  
        <div class="guides">
          <h3>Modalidades de pesca</h3>
          <ul>
            <li><a href="#">Tienda de Pesca Surfcasting</a></li>
            <li><a href="#">Tienda de Pesca Rockfishing</a></li>
            <li><a href="#">Tienda de Pesca Spinning</a></li>
            <li><a href="#">Tienda de Pesca Curricán</a></li>
            <li><a href="#">Tienda de Pesca a Mosca</a></li>
            <li><a href="#">Tienda de Pesca Eging</a></li>
          </ul>
        </div>
  
      </div>
    </div>
    <Footer />  
  </body>

  );
};

export default Team;
