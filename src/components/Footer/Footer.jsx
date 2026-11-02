import { CONTATO, MARCA } from "../../constants";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={`container ${styles.footer}`}>
    <div><a href="#inicio" className={styles.marca}><img src={`${import.meta.env.BASE_URL}LOGO%20PNG.png`} alt={MARCA.nome} width="110" height="99" /></a><p>Um carinho em forma de bolo.</p></div>
    <div className={styles.links}>
      {CONTATO.instagram && <a href={CONTATO.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}
      <a href="#contato">Contato</a><a href="#inicio">Voltar ao topo ↑</a>
    </div>
    <small>© {new Date().getFullYear()} {MARCA.nome}. Feito com carinho.</small>
  </footer>
);

export default Footer;
