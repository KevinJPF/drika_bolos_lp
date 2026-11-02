import { CONTATO, MARCA } from "../../constants";
import styles from "./WhatsappFlutuante.module.css";

const WhatsappFlutuante = () => {
  const configurado = /^\d{12,13}$/.test(CONTATO.whatsapp);
  const destino = configurado
    ? `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(MARCA.mensagem)}`
    : "#contato";

  return (
    <a className={styles.botao} href={destino} target={configurado ? "_blank" : undefined} rel={configurado ? "noreferrer" : undefined} aria-label={configurado ? "Fazer uma encomenda pelo WhatsApp" : "WhatsApp: consultar informações de contato"}>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 24 12c0-3.2-1.2-6.2-3.5-8.5ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A10 10 0 1 1 12 22Zm5.5-7.5c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2l-.9 1c-.2.2-.4.2-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.4.3-.4.8-1.4.1-.2 0-.4 0-.6l-.9-2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.2.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3 4.8 4.2 1.8.8 2.5.9 3.4.8.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg>
      <span>Pedir no WhatsApp</span>
    </a>
  );
};

export default WhatsappFlutuante;
