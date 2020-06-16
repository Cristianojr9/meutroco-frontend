import React from "react";

import Logo from "../../assets/logo.svg";
import Celular from "../../assets/celular.svg";
import Google from "../../assets/googleplay.svg";
import Porco from "../../assets/porco.svg";
import Mulheres from "../../assets/mulheres.svg";
import Mercado from "../../assets/mercado.svg";
import Mulher from "../../assets/mulher.png";
import Frutas from "../../assets/frutas.png";

import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <section className="nav">
        <img src={Logo} alt="logo" />
        <ul>
          <li><a href="/">Quem Somos</a></li>
          <li><a href="/">Para você</a></li>
          <li><a href="/">Para sua empresa</a></li>
          <li><a href="/">Benefícios</a></li>
          <li><a href="/">Equipe</a></li>
        </ul>
      </section>
      <section className="info-page">
        <div className="info-text">
          <h2>
            Suas moedas esquecidas
            {" "}
            <p>farão toda a diferença agora!</p>
          </h2>
          <button type="button">
            <img src={Google} alt="googleplay" />
            <h2>Disponivel no</h2>
            {" "}
            <p>Google Play</p>
          </button>
        </div>
        <img src={Celular} alt="muier" />
      </section>
      <section className="description-meutroco">
        <div className="title">
          <h1>
            O que é a
            {" "}
            <b>Meu Troco?</b>
          </h1>
        </div>
        <div className="description-info">
          <img src={Porco} alt="" />
          <p>
            Somos uma carteira virtual que irá
            {" "}
            <br />
            {" "}
            digitalizar suas moedas, trazendo
            <br />
            {" "}
            conforto, segurança e uma
            {" "}
            <br />
            educação financeira. Uma startup
            {" "}
            <br />
            100% cearense, criada para
            {" "}
            <br />
            facilitar o repasse de troco em
            {" "}
            <br />
            estabelecimentos comercias.
          </p>
        </div>
      </section>
      <section className="text-information">
        <div className="title">
          <h1>
            Utilize seu
            {" "}
            <b>troco </b>
            em qualquer lugar
          </h1>
        </div>
        <div className="description-info">
          <p>
            Nossa aplicação irá simplificar e
            {" "}
            <br />
            {" "}
            facilitar o modo de você receber o
            <br />
            {" "}
            troco em estabelecimentos
            {" "}
            <br />
            comerciais, além de realizar
            {" "}
            <br />
            pagamentos, transferências para
            {" "}
            <br />
            amigos, compras online e
            {" "}
            <br />
            compras em lojas físicas
          </p>
          <img src={Mulheres} alt="" />
        </div>
      </section>
      <section className="text-empresas">
        <div className="title">
          <h1>
            Voce pode usar agora na sua
            {" "}
            <br />
            <b>empresa </b>
          </h1>
        </div>
        <div className="description-empresas">
          <img src={Mercado} alt="" />
          <p>
            Nossa aplicação irá simplificar e
            {" "}
            <br />
            {" "}
            facilitar o modo de você receber o
            <br />
            {" "}
            troco em estabelecimentos
            {" "}
            <br />
            comerciais, além de realizar
            {" "}
            <br />
            pagamentos, transferências para
            {" "}
            <br />
            amigos, compras online e
            {" "}
            <br />
            compras em lojas físicas
          </p>
        </div>
      </section>
      {/* <section className="beneficios">
        <div className="esquerda">
          <h1>Para você</h1>
          <span>
            Vamos ajudar a você controlar e receber seu
            {" "}
            <br />
            troco sempre!
          </span>
          <button type="button">Saiba mais</button>
        </div>
        <div className="direita">
          <h1>Para empresas</h1>
          <span>
            Sua empresa terá uma melhor gestão de
            {" "}
            <br />
            moedas e muitos clientes satisfeitos
          </span>
          <button type="button">Saiba mais</button>
        </div>
      </section>
      */}
      <section className="duvidas">
        <h1>Conheça mais sobre a meu troco</h1>
        <span>Deixe seu e-mail abaixo para entrarmos em contato</span>
        <div>
          <input />
          <button type="submit">Enviar</button>
        </div>
      </section>
      <section className="equipe">
        <h1>Conheça nossa equipe</h1>
        <div>
          <img src="" alt="" />
          <h2>Anthony Moreira</h2>
          <span>CEO</span>
          <p>
            Formando em Sistemas de Informação
            {" "}
            <br />
            pela Universidade Federal do Ceará,
            {" "}
            <br />
            especialidade em Gestão.
            {/* icones */}
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <h2>Anthony Moreira</h2>
          <span>CEO</span>
          <p>
            Formando em Sistemas de Informação
            {" "}
            <br />
            pela Universidade Federal do Ceará,
            {" "}
            <br />
            especialidade em Gestão.
            {/* icones */}
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <h2>Anthony Moreira</h2>
          <span>CEO</span>
          <p>
            Formando em Sistemas de Informação
            {" "}
            <br />
            pela Universidade Federal do Ceará,
            {" "}
            <br />
            especialidade em Gestão.
            {/* icones */}
          </p>
        </div>

      </section>
      <section className="spam">
        <h1>
          Controle agora
          {" "}
          <b>seu troco</b>
        </h1>
        <span>Acesse agora</span>
        <button type="submit">BAIXE E APROVEITE</button>
      </section>
      <section>
        <img src={Logo} alt="" />
        {/** email + instagram */}
      </section>
    </div>
  );
}
