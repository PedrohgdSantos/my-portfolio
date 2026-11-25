# Registro diário de mudanças

Este arquivo acompanha as alterações do portfólio. As datas seguem o fuso de São Paulo. Cada entrada informa a mudança, o motivo, os arquivos envolvidos e a verificação feita.

## 2026-11-25

### Efeito compartilhado nos botões e filtros

- **O que mudou:** O brilho, a elevação e o movimento da seta de “Conheça meu trabalho” viraram um estilo reutilizável. Ele foi aplicado a “Vamos conversar” no header e no menu compacto, ao botão do modal de projetos e aos filtros “Todos”, “Negócios locais” e “Projetos pessoais”. Os filtros mantêm o estado selecionado e agora expõem `aria-pressed`.
- **Por quê:** Unificar a resposta visual dos controles com aparência de botão.
- **Arquivos afetados:** `src/components/Hero.tsx`, `src/components/Header.tsx`, `src/components/Projects.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. As interações ainda não foram conferidas no navegador.

### Animações dos links da abertura

- **O que mudou:** “Conheça meu trabalho” recebeu transição suave de elevação, brilho e movimento do ícone; “Um pouco sobre mim” ganhou sublinhado progressivo e deslocamento da seta. Os efeitos funcionam com hover e foco, com movimento reduzido respeitado.
- **Por quê:** As interações anteriores trocavam cor e posição de forma brusca.
- **Arquivos afetados:** `src/components/Hero.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A fluidez visual ainda não foi conferida no navegador.

### Ícones sobrepostos no menu hambúrguer

- **O que mudou:** As regras que sobrepõem e alternam os ícones de abrir e fechar foram aplicadas a toda a faixa do menu compacto, até 980 px, em vez de ficarem limitadas a 760 px.
- **Por quê:** Entre 761 e 980 px, os dois SVGs apareciam juntos e o X escapava do botão, como na imagem enviada.
- **Arquivos afetados:** `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A faixa de 761 a 980 px ainda não foi conferida no navegador.

### Ícones de tecnologias com fundo preto no modo claro

- **O que mudou:** Os círculos dos ícones da órbita e do destaque central passaram a ter fundo preto no tema claro. O logo do MySQL fica branco nesse tema para manter contraste, e o nome da tecnologia central recebeu uma cor mais escura.
- **Por quê:** Os logotipos estavam difíceis de enxergar sobre os círculos claros.
- **Arquivos afetados:** `src/components/TechStrip.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. O contraste visual ainda não foi conferido no navegador.

### Tema Dracula no código da abertura

- **O que mudou:** A janela `sobre-mim.ts` passou a usar a paleta Dracula Classic nos modos claro e escuro, com fundo e texto próprios, fonte monoespaçada e cores de sintaxe para palavras-chave, identificadores, strings, funções e comentários. As cores anteriores do modo claro deixaram de sobrescrever essa janela.
- **Por quê:** Dar aparência de editor de código ao trecho da abertura e manter a mesma identidade visual nos dois modos.
- **Arquivos afetados:** `src/components/Hero.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. O resultado visual ainda não foi conferido no navegador.

### Indicadores do carrossel mais fluidos

- **O que mudou:** As bolinhas de progresso ganharam áreas de largura fixa e transição suave apenas no desenho interno. Durante o avanço automático, o índice deixa de oscilar entre os cards atravessados e é reconciliado ao fim da rolagem. Os indicadores continuam acompanhando o arraste manual.
- **Por quê:** A mudança brusca de largura e as atualizações repetidas deixavam a animação das bolinhas travada.
- **Arquivos afetados:** `src/components/Certificates.tsx`, `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A fluidez visual ainda não foi conferida no navegador.

### Header redesenhado e responsivo

- **O que mudou:** O cabeçalho virou uma barra única com assinatura, nome, navegação simples, contato e controle de tema. O menu compacto agora entra até 980 px, inclui o contato e fecha ao clicar fora, escolher um link, pressionar Escape ou voltar à largura de desktop. Os dois temas receberam cores próprias.
- **Por quê:** O cabeçalho anterior misturava elementos flutuantes e ficava apertado antes da largura de celular.
- **Arquivos afetados:** `src/components/Header.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A conferência no navegador não foi possível: o servidor local recebeu `EACCES` ao tentar abrir `127.0.0.1:5173` neste ambiente.

### Certificados menores no carrossel

- **O que mudou:** A largura dos cards foi reduzida de 36% para 30% no desktop, de 46% para 39% no tablet e de 82% para 72% no celular. O texto e o espaço interno também ficaram um pouco menores.
- **Por quê:** Os certificados ainda ocupavam espaço demais após o primeiro ajuste.
- **Arquivos afetados:** `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. O tamanho final ainda não foi conferido no navegador.

### Troca mais rápida dos certificados

- **O que mudou:** O intervalo do avanço automático caiu de cinco para 3,2 segundos e a transição de destaque dos cards foi reduzida de 0,55 para 0,35 segundo.
- **Por quê:** Deixar o carrossel mais ágil durante a apresentação dos certificados.
- **Arquivos afetados:** `src/components/Certificates.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A velocidade percebida ainda não foi conferida no navegador.

### Carrossel automático com destaque central

- **O que mudou:** Os certificados passaram a avançar a cada cinco segundos e a circular entre o último e o primeiro. O card atual fica centralizado e levemente ampliado, enquanto os vizinhos aparecem escurecidos. O avanço pausa fora da tela, em aba oculta, durante interação e para quem prefere movimento reduzido; os controles manuais continuam disponíveis.
- **Por quê:** Dar destaque ao certificado exibido e mostrar os demais automaticamente.
- **Arquivos afetados:** `src/components/Certificates.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. O movimento e a composição visual ainda não foram conferidos no navegador.

### Cards de certificados mais compactos

- **O que mudou:** Reduzida a largura dos cards e o espaçamento interno, com medidas próprias para desktop, tablet e celular. O título e o espaço vertical da área de certificados também ficaram menores.
- **Por quê:** Os certificados estavam ocupando espaço demais na seção Sobre mim.
- **Arquivos afetados:** `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A nova composição ainda não foi conferida no navegador.

## 2026-11-24

### Imagens em destaque nos certificados

- **O que mudou:** As prévias reais dos certificados passaram a ocupar toda a largura do card, com proporção próxima à página original. Os cards ficaram mais largos no carrossel, e o rótulo de curso foi movido para baixo da imagem para não cobrir o documento.
- **Por quê:** Dar mais destaque visual às imagens dos certificados e facilitar o reconhecimento de cada documento.
- **Arquivos afetados:** `src/components/Certificates.tsx`, `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite, e as quatro imagens WebP referenciadas pelos cards estão presentes em `public/certificates/`. A nova composição ainda não foi conferida no navegador.

### Certificados conferidos nos PDFs

- **O que mudou:** Quatro cards foram preenchidos com títulos, instituições, datas e durações lidos nos PDFs de Alura, DIO e Intelbras. Cada card recebeu uma prévia WebP e abre uma cópia local do certificado em PDF. O certificado da Udemy foi excluído a pedido do proprietário.
- **Por quê:** Substituir os dados provisórios por documentos reais e permitir que visitantes consultem os certificados.
- **Arquivos afetados:** `src/data/certificates.ts`, `src/components/Certificates.tsx`, `public/certificates/` (quatro PDFs e quatro WebP), `README.md`, `CHANGELOG.md`.
- **Verificação:** Os cinco PDFs de origem foram renderizados e inspecionados visualmente. `npm run build` passou com TypeScript e Vite; os quatro PDFs copiados têm hashes idênticos aos originais, as quatro prévias possuem assinatura WebP válida e os oito arquivos aparecem em `dist/certificates/`. O carrossel ainda não foi conferido no navegador.

### Cinco certificados identificados pelos nomes dos arquivos

- **O que mudou:** O carrossel recebeu cinco cards com títulos informados nos nomes dos PDFs. “Alura” e “DIO” foram usados como instituições apenas onde apareciam explicitamente nos nomes. Datas, prévias e links permanecem vazios.
- **Por quê:** Mostrar os certificados enviados pelo proprietário sem inventar dados que exigem leitura dos documentos.
- **Arquivos afetados:** `src/data/certificates.ts`, `src/components/Certificates.tsx`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. Os PDFs não puderam ser abertos porque o drive `K:` não existe neste ambiente; os metadados e as imagens ainda não foram conferidos.

### Certificados integrados ao Sobre mim

- **O que mudou:** O carrossel de certificados foi movido para dentro do componente Sobre mim, após a apresentação pessoal, com o mesmo fundo e uma divisão discreta. O menu voltou a apontar apenas para Sobre mim, e Serviços voltou a ser a seção 03.
- **Por quê:** Fazer os certificados parecerem parte da trajetória pessoal, conforme a orientação mais recente.
- **Arquivos afetados:** `src/App.tsx`, `src/components/About.tsx`, `src/components/Certificates.tsx`, `src/components/Header.tsx`, `src/components/Services.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A integração visual ainda não foi conferida no navegador; os dados dos certificados continuam pendentes.

### Certificados após a seção Sobre

- **O que mudou:** A seção de certificados passou a aparecer imediatamente depois de “Sobre mim”, antes de Serviços. Os números das seções e a ordem dos links do menu foram ajustados para acompanhar a página.
- **Por quê:** Aproximar os certificados da apresentação da trajetória e melhorar a sequência de leitura.
- **Arquivos afetados:** `src/App.tsx`, `src/components/Certificates.tsx`, `src/components/Services.tsx`, `src/components/Header.tsx`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A nova sequência ainda não foi conferida visualmente no navegador.

### Carrossel de certificados no lugar da seção GitHub

- **O que mudou:** A seção de repositórios do GitHub foi substituída por uma área de certificados. O componente aceita cards de cursos e eventos com imagem e link opcionais, rolagem horizontal, indicadores e botões. Foi criado um arquivo de dados para os certificados reais e um estado temporário enquanto ele está vazio.
- **Por quê:** Dar destaque às formações e participações do proprietário no lugar da consulta de repositórios.
- **Arquivos afetados:** `src/App.tsx`, `src/components/Header.tsx`, `src/components/Certificates.tsx`, `src/components/GitHub.tsx` (removido), `src/data/certificates.ts`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A busca no código confirmou a remoção da consulta e dos estilos do GitHub. Nenhum certificado foi atribuído ao proprietário sem documento ou dados fornecidos; a interação do carrossel ainda não foi conferida no navegador.

### Tipografia mais legível

- **O que mudou:** A interface passou a usar Nunito Sans em títulos, conteúdo e controles. Textos de leitura e rótulos pequenos foram ampliados; os filtros podem quebrar linha em telas estreitas.
- **Por quê:** Dar ao portfólio uma aparência mais amigável e facilitar a leitura, especialmente no celular.
- **Arquivos afetados:** `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A busca no CSS confirmou a remoção das fontes anteriores dos textos da interface. A aparência e as quebras de linha ainda não foram conferidas no navegador.

### Textos mais legíveis no modo escuro

- **O que mudou:** Descrições, subtítulos, rótulos, filtros, código ilustrativo e textos dos cards receberam tons claros no modo escuro. O modo claro manteve suas cores.
- **Por quê:** Melhorar a leitura sobre os fundos escuros do portfólio.
- **Arquivos afetados:** `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. Os tons secundários e discretos calculados sobre os principais fundos escuros ficaram acima de 8,8:1 de contraste. A aparência ainda não foi conferida no navegador.

### Quebra do título Sobre no mobile

- **O que mudou:** “Desenvolvedor” e “Full Stack.” aparecem em linhas separadas na seção Sobre em telas de até 760 px. Em telas maiores, continuam na mesma linha.
- **Por quê:** Melhorar a leitura e seguir a composição solicitada para o mobile.
- **Arquivos afetados:** `src/components/About.tsx`, `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A quebra de linha ainda não foi conferida visualmente no navegador.

### Grafia de Full Stack

- **O que mudou:** Corrigida a apresentação da seção Sobre para “Desenvolvedor Full Stack.”
- **Por quê:** Usar a grafia indicada pelo proprietário do portfólio.
- **Arquivos afetados:** `src/components/About.tsx`, `CHANGELOG.md`.
- **Verificação:** Texto conferido no componente. Nenhuma lógica foi alterada.

### Logo e apresentação na seção Sobre

- **O que mudou:** A arte da seção “Quem está por trás do código” agora usa a mesma assinatura SVG animada do cabeçalho. O subtítulo “Curioso por natureza.” foi substituído por “Desenvolvedor Full Stack.”
- **Por quê:** Unificar a identidade visual e atualizar a apresentação profissional conforme solicitado.
- **Arquivos afetados:** `src/components/About.tsx`, `src/components/Logo.tsx`, `src/style.css`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A aparência da seção ainda não foi conferida no navegador.

### Composição do hero no celular

- **O que mudou:** O card “Da ideia à experiência” e o texto inferior passaram a seguir a janela de código no fluxo da página em telas pequenas. A janela também ganhou largura e tipografia ajustadas ao espaço disponível.
- **Por quê:** Eliminar a sobreposição mostrada na captura da versão mobile.
- **Arquivos afetados:** `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A captura fornecida identificou a sobreposição original; a nova disposição ainda não foi conferida no navegador.

### Entrada animada do ícone de tema

- **O que mudou:** Ao alternar entre os modos claro e escuro, o novo ícone surge com escala, rotação e leve ressalto. A animação ocorre após cada clique e respeita a preferência por movimento reduzido.
- **Por quê:** Tornar a troca de tema mais perceptível e fluida.
- **Arquivos afetados:** `src/components/Header.tsx`, `src/style.css`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite. A animação ainda não foi conferida visualmente no navegador.

### Assinatura cursiva animada

- **O que mudou:** O monograma `ph.` foi redesenhado com traços cursivos SVG no cabeçalho e no rodapé. Os traços se desenham em sequência e reiniciam em ciclo; o favicon recebeu a versão estática da assinatura.
- **Por quê:** Dar ao portfólio uma logo que pareça se escrever repetidamente, conforme solicitado.
- **Arquivos afetados:** `src/components/Logo.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/style.css`, `public/favicon.svg`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite; o favicon SVG foi lido como XML válido. A animação usa uma versão estática quando há preferência por movimento reduzido. A aparência e o ciclo ainda não foram conferidos no navegador.

### Modos claro e escuro

- **O que mudou:** Adicionado controle de tema no cabeçalho, com cores claras para as seções e interfaces do portfólio. O tema inicial segue o sistema e a escolha manual é salva no navegador.
- **Por quê:** Permitir que visitantes usem o portfólio nos modos claro e escuro.
- **Arquivos afetados:** `src/components/Header.tsx`, `src/style.css`, `index.html`, `README.md`, `CHANGELOG.md`.
- **Verificação:** `npm run build` passou com TypeScript e Vite, e a prévia local respondeu com HTTP 200. O servidor Vite precisou de permissão adicional para abrir `127.0.0.1:5173`. O acesso ao navegador de prévia estava indisponível, então a aparência não foi conferida visualmente.

### Registro de alterações para próximos agentes

- **O que mudou:** Criado este registro diário e adicionadas instruções para que agentes o atualizem junto com futuras mudanças.
- **Por quê:** Facilitar a leitura do histórico do projeto sem depender das conversas anteriores.
- **Arquivos afetados:** `CHANGELOG.md`, `AGENTS.md`, `README.md`.
- **Verificação:** Conferida a criação dos arquivos e a referência no README. Nenhum código da aplicação foi alterado.
