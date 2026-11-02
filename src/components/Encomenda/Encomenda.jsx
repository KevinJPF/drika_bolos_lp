import { useState } from "react";
import { CONTATO, MARCA } from "../../constants";
import styles from "./Encomenda.module.css";

const Encomenda = () => {
  const [mensagemCopiada, setMensagemCopiada] = useState(false);
  const [erro, setErro] = useState("");
  const whatsappConfigurado = /^\d{12,13}$/.test(CONTATO.whatsapp);
  const linkWhatsapp = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(MARCA.mensagem)}`;

  const copiarMensagem = async () => {
    try {
      await navigator.clipboard.writeText(MARCA.mensagem);
      setMensagemCopiada(true);
      setErro("");
    } catch {
      setErro("Não foi possível copiar automaticamente. Selecione a mensagem abaixo para copiar.");
    }
  };

  return (
    <section id="contato" className={styles.contato} aria-labelledby="titulo-contato">
      <div className={`container ${styles.conteudo}`}>
        <span className={styles.flor} aria-hidden="true">✳</span>
        <span className="eyebrow">Vamos criar um momento especial?</span>
        <h2 id="titulo-contato">A próxima doce memória<br />pode começar aqui.</h2>
        <p>Conte a sua ideia. Vamos conversar sobre o bolo que vai fazer parte da sua comemoração.</p>
        {whatsappConfigurado ? (
          <a className="button" href={linkWhatsapp} target="_blank" rel="noreferrer">Conversar pelo WhatsApp ↗</a>
        ) : (
          <><button className="button" onClick={copiarMensagem}>Copiar mensagem de encomenda ↗</button><small>O contato para encomendas será disponibilizado em breve.</small></>
        )}
        <div role="status" className={styles.status}>{mensagemCopiada && "Mensagem copiada!"}{erro}</div>
        {erro && <p className={styles.mensagem}>{MARCA.mensagem}</p>}
        {CONTATO.local && <p className={styles.local}>{CONTATO.local}</p>}
      </div>
    </section>
  );
};

export default Encomenda;
