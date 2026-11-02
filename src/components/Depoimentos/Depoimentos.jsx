import { DEPOIMENTOS } from "../../constants";
import styles from "./Depoimentos.module.css";

const Depoimentos = () => (
  <section id="avaliacoes" className={styles.secao} aria-labelledby="titulo-depoimentos">
    <div className="container">
      <span className="eyebrow">O carinho que volta</span>
      <h2 id="titulo-depoimentos">Depois do bolo,<br /><em>ficam as boas lembranças.</em></h2>
      {DEPOIMENTOS.length ? <div className={styles.lista}>{DEPOIMENTOS.map((item, index) => (
        <figure key={`${item.nome}-${index}`}><span aria-hidden="true">“</span><blockquote>{item.texto}</blockquote><figcaption>{item.nome}<small>{item.ocasiao}</small></figcaption></figure>
      ))}</div> : <p className={styles.vazio}>Este espaço vai receber as histórias de quem já celebrou com a Drika.<br />Em breve, depoimentos por aqui.</p>}
    </div>
  </section>
);

export default Depoimentos;
