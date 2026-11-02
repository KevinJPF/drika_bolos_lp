// Preencha antes de publicar. WhatsApp: somente números, com país e DDD.
export const CONTATO = {
  whatsapp: "5511971724308",
  instagram: "https://www.instagram.com/umrolodecafecombolo/",
  local: "Bom Jesus dos Perdões · SP",
};

export const MARCA = {
  nome: "Drika Bolos",
  assinatura: "Confeitaria artesanal",
  mensagem: "Olá, Drika! Gostaria de conversar sobre uma encomenda.",
};

export const CONFEITEIRA = {
  nome: "Adriana Pires Meira",
  foto: "/drika-retrato-profissional.png",
  alt: "Retrato de Adriana, a Drika, com avental em uma confeitaria",
};

// Substitua os textos de consulta pelas opções e condições reais.
export const CARDAPIO = [
  { titulo: "Massas", texto: "O primeiro passo para a sua combinação favorita.", opcoes: ["Consulte as opções de massas no atendimento."] },
  { titulo: "Recheios", texto: "O toque que deixa cada fatia especial.", opcoes: ["Consulte os recheios e as combinações disponíveis."] },
  { titulo: "Tamanhos e decoração", texto: "Na medida da sua comemoração.", opcoes: ["Combine o tamanho pela quantidade de convidados.", "Envie referências para conversar sobre a decoração."] },
];

export const ATENDIMENTO = [
  { titulo: "Entrega e retirada", texto: "Consulte a região de atendimento e combine como receber sua encomenda." },
  { titulo: "Antecedência", texto: "Consulte a agenda para a data desejada antes de confirmar o pedido." },
  { titulo: "Horários", texto: "Horários de atendimento serão informados em breve." },
];

// Adicione apenas depoimentos reais, com autorização para exibição.
// Formato: { nome: "Nome", ocasiao: "Aniversário", texto: "Depoimento" }
export const DEPOIMENTOS = [];

// Imagens de trabalhos reais, obtidas das capas dos Reels do perfil profissional.
// Os links de origem ficam junto aos itens para facilitar futuras atualizações.
export const BOLOS = [
  { id: "azul", categoria: "Bolos decorados", titulo: "Delicadeza em azul", descricao: "Decoração em chantininho com detalhes em azul, feita pela Drika.", imagem: "/bolos/bolo-azul.jpg", alt: "Bolo da Drika com acabamento branco e detalhes em chantininho azul", post: "https://www.instagram.com/p/DdPTHgmMCC-/" },
  { id: "ganache", categoria: "Para quem ama chocolate", titulo: "Chocolate com ganache", descricao: "Bolo de chocolate com ganache de chocolate nobre, como apresentado no perfil.", imagem: "/bolos/chocolate-ganache.jpg", alt: "Bolo de chocolate com ganache preparado pela Drika", post: "https://www.instagram.com/p/DdPUQIRB65H/" },
  { id: "cenoura", categoria: "Clássicos caseiros", titulo: "Cenoura com chocolate", descricao: "O encontro do bolo artesanal de cenoura com a cobertura de chocolate.", imagem: "/bolos/cenoura-chocolate.jpg", alt: "Bolo artesanal de cenoura com chocolate da Drika", post: "https://www.instagram.com/p/DdPSS5DtfAK/" },
  { id: "divertidamente", categoria: "Bolos temáticos", titulo: "Uma festa de cores", descricao: "Uma decoração inspirada em Divertidamente, criada a pedido de uma cliente.", imagem: "/bolos/divertidamente.jpg", alt: "Bolo temático Divertidamente decorado pela Drika", post: "https://www.instagram.com/p/DdPUs10sGBG/" },
  { id: "prestigio", categoria: "Para compartilhar", titulo: "Prestígio com brigadeiro", descricao: "Bolo prestígio com cobertura de brigadeiro escorrendo pelas laterais.", imagem: "/bolos/prestigio.jpg", alt: "Bolo prestígio da Drika com cobertura de brigadeiro", post: "https://www.instagram.com/p/DdPR2fUMzE4/" },
  { id: "doces", categoria: "Doces de festa", titulo: "Pequenos doces, muito carinho", descricao: "Doces finos e tradicionais para acompanhar a sua comemoração.", imagem: "/bolos/doces.jpg", alt: "Doces de festa preparados pela Drika", post: "https://www.instagram.com/p/DQSVmSRicAE/" },
];

export const VIDEOS = [
  { id: "DdPVNQ3AoyS", titulo: "Um bolo bem chocolatudo", imagem: "/bolos/chocolate-ganache.jpg" },
  { id: "DQ5ChXmDjj_", titulo: "O carinho em cada etapa da decoração", imagem: "/bolos/divertidamente.jpg" },
];

export const ETAPAS = [
  { titulo: "Conte a sua ideia", texto: "Separe a data, a quantidade de pessoas e as referências que você gosta." },
  { titulo: "Combine os detalhes", texto: "Converse sobre sabores, decoração, orçamento e disponibilidade para a data." },
  { titulo: "Prepare a comemoração", texto: "Confirme a encomenda e combine a forma de receber seu bolo diretamente com a Drika." },
];

export const DUVIDAS = [
  { pergunta: "Como faço uma encomenda?", resposta: "Entre em contato e conte a data da comemoração, a quantidade de convidados e o que você imaginou para o bolo. Os detalhes e o orçamento são combinados diretamente com a Drika." },
  { pergunta: "Posso enviar uma referência de decoração?", resposta: "Sim! Separe suas referências para a conversa. A possibilidade de personalização e os detalhes da decoração precisam ser confirmados antes de fechar a encomenda." },
  { pergunta: "Quais sabores e tamanhos estão disponíveis?", resposta: "Consulte as opções diretamente com a Drika para escolher uma combinação adequada à sua comemoração e conferir a disponibilidade." },
  { pergunta: "Como funcionam a antecedência e a retirada?", resposta: "A agenda, o prazo de preparo e a forma de receber a encomenda são combinados no atendimento. Consulte a disponibilidade antes de definir a data do pedido." },
  { pergunta: "E se eu tiver alguma restrição alimentar?", resposta: "Informe alergias e restrições antes de encomendar. Confirme os ingredientes e as condições de preparo diretamente com a Drika para avaliar se o pedido pode ser atendido." },
];
