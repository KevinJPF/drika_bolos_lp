import Videos from "../components/Videos/Videos";
import Hero from "./Hero/Hero";
import Encomenda from "../components/Encomenda/Encomenda";
import Sabores from "../components/Sabores/Sabores";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import Atendimento from "../components/Atendimento/Atendimento";
import { BOLOS, CONFEITEIRA, DUVIDAS, ETAPAS } from "../constants";
import styles from "./Home.module.css";

const Home = () => (
  <main id="conteudo">
    <Hero />
    <div className={styles.faixa}><span>Feito à mão</span><span aria-hidden="true">✳</span><span>Carinho em cada detalhe</span><span aria-hidden="true">✳</span><span>Para momentos especiais</span></div>
    <section id="bolos" className={`container ${styles.secao}`} aria-labelledby="titulo-bolos">
      <div className={styles.cabecalho}>
        <div><span className="eyebrow">Doces que fazem parte da história</span><h2 id="titulo-bolos">Cada ocasião,<br /><em>um carinho diferente.</em></h2></div>
        <p>Da primeira fatia ao último sorriso.<br />Inspirações para deixar a sua mesa<br />com um toque especial.</p>
      </div>
      <div className={styles.bolos}>
        {BOLOS.map((bolo) => (
          <article key={bolo.id} className={styles.bolo}>
            <div className={styles.imagem}><img src={bolo.imagem} alt={bolo.alt} loading="lazy" width="600" height="680" /></div>
            <span className="eyebrow">{bolo.categoria}</span><h3>{bolo.titulo}</h3><p>{bolo.descricao}</p>
            <a className="text-link" href="#contato">Conversar sobre uma ideia ↗</a>
          </article>
        ))}
      </div>
      <p className={styles.nota}>Trabalhos da Drika · Veja mais em <a className="text-link" href="https://www.instagram.com/umrolodecafecombolo/" target="_blank" rel="noreferrer">@umrolodecafecombolo ↗</a></p>
    </section>
    <Videos />
    <Sabores />
    <Depoimentos />
    <section id="sobre" className={styles.sobre} aria-labelledby="titulo-sobre">
      <div className={`container ${styles.sobreConteudo}`}>
        <figure className={styles.retrato}>
          <img src={CONFEITEIRA.foto} alt={CONFEITEIRA.alt} width="1024" height="1280" loading="lazy" />
          <figcaption><span>{CONFEITEIRA.nome}</span><small>COM CARINHO, DRIKA</small></figcaption>
        </figure>
        <div><span className="eyebrow">Quem está por trás dos doces</span><h2 id="titulo-sobre">Prazer, Drika.</h2><p>Por trás da Drika Bolos está uma mãe e confeiteira que coloca cuidado no que faz. É esse olhar carinhoso que inspira cada detalhe e dá sentido a cada encomenda.</p><p>A proposta é simples: preparar bolos artesanais para acompanhar encontros, celebrar pessoas e tornar os seus momentos ainda mais especiais.</p><a className="text-link" href="#contato">Vamos pensar no seu próximo bolo? ↗</a></div>
      </div>
    </section>
    <section id="como-encomendar" className={`container ${styles.secao}`} aria-labelledby="titulo-etapas">
      <span className="eyebrow">Da sua ideia à comemoração</span><h2 id="titulo-etapas">Seu próximo bolo começa<br />com uma boa conversa.</h2>
      <div className={styles.etapas}>{ETAPAS.map((etapa, index) => <article key={etapa.titulo}><span className={styles.numero}>0{index + 1}</span><h3>{etapa.titulo}</h3><p>{etapa.texto}</p></article>)}</div>
    </section>
    <section className={`container ${styles.duvidas}`} aria-labelledby="titulo-duvidas">
      <div><span className="eyebrow">Antes da primeira fatia</span><h2 id="titulo-duvidas">Algumas dúvidas,<br />respondidas.</h2><p>Os detalhes de cada pedido são<br />combinados com você.</p></div>
      <div>{DUVIDAS.map((duvida) => <details key={duvida.pergunta}><summary>{duvida.pergunta}</summary><p>{duvida.resposta}</p></details>)}</div>
    </section>
    <Atendimento />
    <Encomenda />
  </main>
);

export default Home;
