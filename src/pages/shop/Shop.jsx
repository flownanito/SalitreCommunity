import React, { useState } from 'react';
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import './Shop.css';

function Shop() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: 'Caña Daiwa Legacy accion 10-40g', price: '$110', image: 'https://www.a-alvarez.com/101550-home_default/cana-daiwa-exceler-spinning.jpg' },
    { id: 2, name: 'Caña Spinig Copesca Spining pesad', price: '$120', image: 'https://www.fishernator.es/media/catalog/product/cache/11/thumbnail/1500x1500/9df78eab33525d08d6e5fb8d27136e95/n/a/nas610mfe_1.jpg' },
    { id: 3, name: 'Caña CDPDEV jiging de recreo', price: '$130', image: 'https://www.fish4kayak.com/14602-large_default/shimano-aernos-ax-spinnin.jpg' },
    { id: 4, name: 'Caña CEANA de spinig medio', price: '$80', image: 'https://brutalpesca.com/14549-home_default/cana-majorcraft-ceana-762-ul.jpg' },
    { id: 5, name: 'carreta YOUKANA 1500 ', price: '$90', image: 'https://www.game-fisher.com/24751-large_default/reel-hart-deep-x100--411--51bb.jpg' },
    { id: 6, name: 'Carrete SHIMAO 3000x', price: '$100', image: 'https://pescapato.com/cdn/shop/files/0245006-web-1000x1000_535x.webp?v=1715673631' },
    { id: 7, name: 'Carrete SIPING 5800x', price: '$65', image: 'https://pescabarca.es/7677-large_default/carrete-okuma-flite-surf-fls-35-1500ay.jpg' },
    { id: 8, name: 'carrete DAIWA linea 10000X nautica', price: '$800', image: 'https://depescar.top/wp-content/uploads/2024/02/C4-Carbon-Vertical-carrete-de-carbono-para-fusiles-Gladius-de-pesca-submarina-1.jpg' },
    { id: 9, name: 'Bichero reforzado', price: '$90', image: 'https://tiendasirena.com/wp-content/uploads/2018/11/Bichero-t%C3%BAnidos.jpg' },
    { id: 10, name: 'Bichero con tubo alargador', price: '$90', image: 'https://www.nootica.es/media/catalog/product/cache/e5a994b9fe5d255b70523f28d91cfb93/g/a/gaffe_3.jpg' },
    { id: 11, name: 'Bichero Pulpo', price: '$110', image: 'https://lh3.googleusercontent.com/proxy/bHLr12_TzVdj3QGBZhJ-n2kkRh8oBtnVmCGUoTGgB4_sy2PFOgvlORysJnY9ZGkyrrdxACeYSgxrZb4K-1q79ZHSvMb64JAaVPicKsu8WGEP351bs4_gXCl4MruG3sZyMg' },
    { id: 12, name: 'Señuelo sardina colaorada', price: '$12', image: 'https://pescamarsada.es/wp-content/uploads/2017/10/X-RAP-158756.jpg' },
    { id: 13, name: 'Señuelo paseante', price: '$13', image: 'https://www.nootica.es/media/catalog/product/cache/6ccdc731594e443df61603be99bd61b4/F/M/FMAG_HERO_2.jpg' },
    { id: 14, name: 'Señeulo de sepia', price: '$14', image: 'https://www.bazarlaspalmeras.com/imagenes_productos/floater%20cg-Fb907.jpg' },
    { id: 15, name: 'Señuelo POPER', price: '$15', image: 'https://images.piensavirtual.com/pescarpermenys/core/opt/images/022677010229.jpg' },
    { id: 16, name: 'Señuelo babero', price: '$160', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9QaUqgfcDpq9tdCXbg7EdhIiAhndNIQs0g&s' },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      <div className="shop-container">
        {/* Carrusel de fotos */}
        <div className="carousel">
          <img src="https://media-tge.ams3.cdn.digitaloceanspaces.com/media/3994625ce80cd4c6.jpg" alt="Anuncio 1" className="carousel-image" />
          <img src="https://pbs.twimg.com/media/DYWgvpjVwAABzO5.jpg" alt="Anuncio 2" className="carousel-image" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJRQmElG6oQYiiVWqM_LAUNfMMQIgVatWEA&s" alt="Anuncio 3" className="carousel-image" />
        </div>

        {/* Zona de anuncios */}
        <div className="announcement">
          <h2>¡Grandes ofertas esta semana!</h2>
          <p>Descuentos de hasta el 50% en productos seleccionados. ¡No te lo pierdas!</p>
        </div>

        {/* Título de la tienda */}
        <h1 className="shop-title">Tienda Salitre</h1>

        {/* Campo de búsqueda */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Grid de productos */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p>
                <button className="buy-button">Comprar</button>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>No se encontraron productos</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;