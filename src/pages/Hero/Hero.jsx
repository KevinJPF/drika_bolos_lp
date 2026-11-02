import { BOLOS } from "../../constants";
import styles from "./Hero.module.css";

const Hero = () => (
  <section id="inicio" className={`container ${styles.hero}`} aria-labelledby="titulo-principal">
    <div className={styles.texto}>
      <span className="eyebrow">Um carinho em forma de bolo</span>
      <h1 id="titulo-principal">Tem momentos<br />que pedem<br /><em>um doce especial.</em></h1>
      <p>Bolos artesanais, cuidado em cada detalhe e aquele carinho que deixa a sua comemoração ainda mais gostosa.</p>
      <div className={styles.acoes}>
        <a className="button" href="#contato">Planejar minha encomenda ↗</a>
        <a className="text-link" href="#bolos">Conhecer os bolos ↓</a>
      </div>
      <div className={styles.assinatura}><span aria-hidden="true">♡</span> Feito com carinho. Pensado para você.</div>
    </div>
    <div className={styles.visual}>
      <div className={styles.foto}><img src={BOLOS[0].imagem} alt={BOLOS[0].alt} fetchPriority="high" /></div>
      <div className={styles.selo}>feito com<br /><strong>amor</strong><span aria-hidden="true">✳</span></div>
      <div className={styles.legenda}><span>DA COZINHA PARA OS SEUS MOMENTOS</span><p>O ingrediente especial<br />é sempre o carinho.</p></div>
    </div>
  </section>
);

export default Hero;
