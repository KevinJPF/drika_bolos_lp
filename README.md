# Drika Bolos

Landing page em React + Vite. Alterações locais, sem necessidade de backend.

## Executar

```sh
npm install
npm run dev
```

Para validar a versão de produção: `npm run build`.

## Manutenção

- `src/constants.js`: nome da marca, WhatsApp, Instagram, região, fotos, textos dos bolos, etapas e perguntas frequentes.
- `src/pages/Home.jsx`: composição das seções da landing page.
- `src/pages/Hero/`: apresentação principal.
- `src/components/`: Header, Footer e Encomenda, cada um com seu CSS Module.
- `src/styles/design-tokens.css`: paleta, tipografia e tokens compartilhados.
- `src/index.css`: reset, estilos base e classes compartilhadas.

A organização segue o padrão do budtasks: componentes funcionais com export default, CSS Modules e dados separados da interface.

## Antes de publicar

Preencha `CONTATO` em `src/constants.js`. O WhatsApp deve conter país, DDD e número, somente dígitos. Enquanto estiver vazio, a seção de contato permite copiar uma mensagem e informa que o contato estará disponível em breve. Local e Instagram só aparecem quando preenchidos.

As imagens são ilustrativas, hospedadas no Unsplash, e estão identificadas na interface. Troque por fotos reais, por exemplo em `public/bolos/`, e atualize `BOLOS` (incluindo os textos alternativos). Ao usar fotos reais, remova as legendas de imagem ilustrativa no Hero e na Home e a observação abaixo da galeria.

Confirme os textos, opções de produtos e condições de atendimento com a confeiteira antes da publicação. Fontes Google e imagens externas precisam de conexão com a internet.

## Segmentos baseados nas referências

As referências em `public/referencias/` orientam a divisão da página. Os componentes Sabores, Depoimentos e Atendimento usam `CARDAPIO`, `DEPOIMENTOS` e `ATENDIMENTO` em `src/constants.js`. Preencha com as opções reais e depoimentos autorizados; a lista vazia mostra uma mensagem de conteúdo em breve.

A logo original é `public/LOGO PNG.png`, usada no cabeçalho e rodapé. O favicon é o original `public/favicon.png`. O componente WhatsappFlutuante permanece fixo em todas as seções: com número configurado abre a conversa; sem número, aponta para a seção de contato.

## Mídias do Instagram

As seis imagens de `public/bolos/` são capas de Reels do perfil profissional `@umrolodecafecombolo`, importadas em 01/11/2026. As URLs dos posts de origem estão em `BOLOS`, em `src/constants.js`. São arquivos locais, sem dependência dos links temporários do CDN do Instagram.

`VIDEOS` configura os dois Reels incorporados pelo componente Videos. Os players só carregam após o clique, dependem do Instagram e têm link alternativo para o post. As capas dos vídeos são imagens de outros trabalhos do mesmo perfil, usadas como apresentação da seção. Para vídeos locais, solicite os arquivos originais e substitua a incorporação por um player HTML.

WhatsApp configurado: +55 11 97172-4308. Perfil: https://www.instagram.com/umrolodecafecombolo/. Região confirmada na bio: Bom Jesus dos Perdões, SP.

## Retrato da confeiteira

`public/drika-retrato-profissional.png` foi criado com a ferramenta integrada ImageGen a partir da selfie da publicação `https://www.instagram.com/p/C_qD0RAu9OM/?img_index=1`, por solicitação do usuário. É um retrato gerado com IA baseado na foto real; o cenário e o figurino foram recriados. A configuração usada pela seção Sobre fica em `CONFEITEIRA`.

Brief do prompt: preservar identidade facial, sorriso, cabelo, textura natural da pele e idade aparente; retrato profissional na altura dos olhos, blusa creme e avental caramelo, fundo discreto de confeitaria com luz natural suave, composição vertical para recorte em arco, sem texto, logos ou outras pessoas.


## GitHub Pages

No GitHub, abra Settings → Pages → Build and deployment → Source e selecione **GitHub Actions**. O workflow `.github/workflows/deploy.yml` instala as dependências, compila o Vite e publica somente `dist` após cada push na branch `main`. Também pode ser iniciado manualmente em Actions.

URL prevista: https://kevinjpf.github.io/drika_bolos_lp/

O workflow define `VITE_BASE_PATH=/drika_bolos_lp/`. Se renomear o repositório ou configurar um domínio próprio, atualize essa variável (para domínio próprio, use `/`). Imagens, logo e favicon respeitam a base. O desenvolvimento local continua em `/`.
