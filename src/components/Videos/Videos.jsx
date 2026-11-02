import { useState } from "react";
import { VIDEOS } from "../../constants";
import styles from "./Videos.module.css";

const Videos = () => {
  const [videoAberto, setVideoAberto] = useState(null);

  return (
    <section className={`container ${styles.secao}`} aria-labelledby="titulo-videos">
      <span className="eyebrow">Um pouquinho dos bastidores</span>
      <h2 id="titulo-videos">O carinho também<br /><em>se vê em movimento.</em></h2>
      <div className={styles.lista}>{VIDEOS.map((video) => (
        <article key={video.id}>
          <div className={styles.player}>
            {videoAberto === video.id ? <iframe title={video.titulo} src={`https://www.instagram.com/reel/${video.id}/embed/`} allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen /> : <button className={styles.capa} onClick={() => setVideoAberto(video.id)} aria-label={`Carregar Reel do Instagram: ${video.titulo}`}><img src={video.imagem} alt="" loading="lazy" /><span><b aria-hidden="true">▷</b>Assistir ao Reel</span></button>}
          </div>
          <h3>{video.titulo}</h3>
          <a className="text-link" href={`https://www.instagram.com/reel/${video.id}/`} target="_blank" rel="noreferrer">Abrir no Instagram ↗</a>
        </article>
      ))}</div>
      <p className={styles.nota}>Vídeos do perfil @umrolodecafecombolo. O player do Instagram carrega ao clicar; se não aparecer, use o link para assistir no perfil.</p>
    </section>
  );
};

export default Videos;
