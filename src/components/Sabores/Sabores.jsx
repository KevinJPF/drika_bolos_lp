import { CARDAPIO } from "../../constants";
import styles from "./Sabores.module.css";

const Sabores = () => (
  <section id="sabores" className={`container ${styles.secao}`} aria-labelledby="titulo-sabores">
    <span className="eyebrow">Uma combinação com a sua cara</span>
    <h2 id="titulo-sabores">Por dentro e por fora,<br /><em>pensado para você.</em></h2>
    <div className={styles.opcoes}>{CARDAPIO.map((item, index) => (
      <article key={item.titulo}><span className={styles.numero}>0{index + 1}</span><h3>{item.titulo}</h3><p>{item.texto}</p><ul>{item.opcoes.map((opcao) => <li key={opcao}>{opcao}</li>)}</ul></article>
    ))}</div>
    <a href="#contato" className="text-link">Conversar sobre sabores e tamanhos ↗</a>
  </section>
);

export default Sabores;
