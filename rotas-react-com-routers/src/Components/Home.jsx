import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="container-header">
        <header>
          <div class="logo">
            <a href="#">José Carlos</a>
          </div>
          <nav id="nav">
            <ul>
              <li><a href="#inicio" onclick="seleccionar()">INICIO</a></li>
              <li><a href="#sobremi" onclick="seleccionar()">SOBRE MIM</a></li>
              <li><a href="#curriculum" onclick="seleccionar()">CURRICULO</a></li>
              <li><a href="#portfolio" onclick="seleccionar()">PROJETOS</a></li>
              <li><a href="#contacto" onclick="seleccionar()">CONTATO</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <section className="inicio">
      <h2>Sobre Mim</h2>
            <p><span>Oi, me chamo José Carlos.</span> Sou um desenvolvedor HTML5 e CSS3 talentoso, com apenas 18 anos de
                idade e já com uma sólida experiência e conhecimento em desenvolvimento web. Sou comprometido, proativo
                e apaixonado por aprender. Busco constantemente expandir meu conhecimento e aprimorar minhas habilidades
                para contribuir em projetos inovadores. Estou pronto para enfrentar novos desafios e fazer uma diferença
                positiva no campo do desenvolvimento web.
                <dd>Além disso, estou conhecendo outras tecnologias da web, como JavaScript, jQuery e frameworks CSS, o
                    que me permite criar interfaces dinâmicas e aprimorar a experiência do usuário em meus projetos.
                    Sou proativo e autônomo, capaz de trabalhar bem em equipe ou de forma independente, sempre focando
                    na qualidade e eficiência do meu trabalho. Além disso, sou organizado e cumpro prazos com
                    excelência.</dd>
            </p>
      </section>

      <footer className="footer-info">
        <Link to={"/login"}>Aba de Login</Link>
      </footer>
    </div>
  )
}

export default Home
