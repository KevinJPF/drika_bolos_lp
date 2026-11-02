import { useState } from "react";
import { MARCA } from "../../constants";
import styles from "./Header.module.css";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.conteudo}`}>
        <a href="#inicio" className={styles.marca} aria-label={`${MARCA.nome}, início`}>
          <img className={styles.logo} src="/LOGO%20PNG.png" alt="" width="80" height="72" />
          <span>{MARCA.nome}<small>{MARCA.assinatura}</small></span>
        </a>
        <button className={styles.menu} aria-expanded={menuAberto} aria-controls="navegacao" onClick={() => setMenuAberto(!menuAberto)}>{menuAberto ? "Fechar ×" : "Menu ☰"}</button>
        <nav id="navegacao" aria-label="Navegação principal" className={`${styles.nav} ${menuAberto ? styles.aberto : ""}`} onClick={() => setMenuAberto(false)}>
          <a href="#bolos">Os bolos</a>
          <a href="#sabores">Sabores</a>
          <a href="#sobre">A confeiteira</a>
          <a href="#como-encomendar">Como encomendar</a>
          <a href="#contato" className="button button-small">Vamos conversar ↗</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
