import "./Footer.css";
import discord from "../../assets/51lpm9SpsJl.png"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">🌊 Salitre - Comunidad de Pescadores 🎣</p>

        <nav className="footer-nav">
          <li><a href="/Home">Inicio</a></li>
          <li><a href="/Shop">Tienda</a></li>
          <li><a href="/Team">Comunidad</a></li>
          <li><a href="/Profile">Perfil</a></li>
          <li><a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.figma.com/file/tuProyecto" target="_blank" rel="noopener noreferrer">Figma</a></li>
        </nav>

        <div className="footer-socials">
          <a href="https://github.com/flownanito" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Git Hub" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src= {discord} alt="Discord" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_circle_icon_256076.png" alt="Twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8N5bNpAl9r4XyyK2Iq4ksbd2xvG3ix1FTw&s" alt="YouTube" />
          </a>
        </div>

        <p className="footer-legal">
        &copy; {new Date().getFullYear()} Salitre. Todos los derechos reservados. <br />
          <a href="../../pages/privacy/privacy.html" target="_blank" rel="noopener noreferrer">Política de Privacidad y Cookies</a> | 
          <a href="/terms.html" target="_blank" rel="noopener noreferrer">Condiciones de Venta</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;