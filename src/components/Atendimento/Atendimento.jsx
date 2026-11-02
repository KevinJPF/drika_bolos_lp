import { ATENDIMENTO, BOLOS, CONTATO } from "../../constants";
import styles from "./Atendimento.module.css";

const Atendimento = () => (
  <section className={`container ${styles.secao}`} aria-labelledby="titulo-atendimento">
    <span className="eyebrow">Os detalhes também importam</span><h2 id="titulo-atendimento">Tudo combinado,<br />com cuidado.</h2>
    <div className={styles.informacoes}>{ATENDIMENTO.map((item) => <article key={item.titulo}><h3>{item.titulo}</h3><p>{item.texto}</p></article>)}</div>
    {CONTATO.local && <p className={styles.local}>{CONTATO.local}</p>}
    <div className={styles.instagram}>
      <div><span className="eyebrow">Mais um pouquinho desse universo</span><h3>Doçura para acompanhar de perto.</h3><p>Inspirações, detalhes e novos motivos para celebrar.</p>{CONTATO.instagram ? <a className="text-link" href={CONTATO.instagram} target="_blank" rel="noreferrer">Acompanhar no Instagram ↗</a> : <small>Nosso Instagram estará disponível em breve.</small>}</div>
      <div className={styles.fotos}>{BOLOS.slice(0, 3).map((bolo) => <img key={bolo.id} src={bolo.imagem} alt={bolo.alt} loading="lazy" width="200" height="200" />)}<small>Trabalhos da Drika · @umrolodecafecombolo</small></div>
    </div>
  </section>
);

export default Atendimento;
