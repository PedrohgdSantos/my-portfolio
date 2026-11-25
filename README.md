# Portfólio — Pedro Henrique

React, TypeScript, Vite e CSS tradicional. Inclui filtros de projetos, detalhes em modal, menu mobile e um carrossel de certificados integrado à seção Sobre mim.

A interface usa a fonte Nunito Sans, com alternativa para a fonte padrão do sistema caso o serviço de fontes não esteja disponível.

O cabeçalho permite alternar entre os modos claro e escuro. Na primeira visita, o site segue a preferência de cores do sistema; a escolha manual fica salva no navegador.

O header reúne assinatura, nome, navegação, contato e tema em uma barra única. Em telas até 980 px, os links ficam em um menu expansível; o contato também aparece dentro dele para acesso em celulares pequenos.

A janela de código ilustrativa na abertura usa a paleta Dracula Classic nos modos claro e escuro, com tipografia monoespaçada e cores de sintaxe para palavras-chave, identificadores, funções, strings e comentários.

No modo claro, os ícones da órbita de tecnologias aparecem em círculos pretos para destacar os logotipos; o MySQL é exibido em branco nesse fundo.

A assinatura cursiva `ph.` do cabeçalho, do rodapé e da seção Sobre se desenha repetidamente. A animação é desativada quando o visitante prefere movimento reduzido.

O brilho e a elevação do botão “Conheça meu trabalho” também são usados nas ações de contato, no botão do modal de projetos e nos filtros de projetos. O link “Um pouco sobre mim” revela um sublinhado. A preferência por movimento reduzido remove essas transições.

## Estrutura

- `src/main.tsx`: inicia o React e importa os estilos.
- `src/App.tsx`: organiza as seções da página.
- `src/components/`: um componente por seção, além das ilustrações dos projetos.
- `src/components/Logo.tsx`: assinatura SVG reutilizada no cabeçalho e no rodapé.
- `src/data/projects.ts`: conteúdo e tipos dos projetos exibidos.
- `src/data/certificates.ts`: dados dos certificados exibidos no carrossel.
- `src/assets/tech/`: logotipos SVG das tecnologias usados na órbita.
- `src/style.css`: estilos globais e das seções.
- `CHANGELOG.md`: registro diário do que mudou, por quê e como foi verificado.
- `AGENTS.md`: instruções para agentes manterem o registro atualizado.

## Executar

```sh
npm install
npm run dev
```

## Gerar versão para hospedagem

```sh
npm run build
```

Publicar a pasta `dist` no Cloudflare Pages ou em outra hospedagem estática.

## Conteúdo

LinkedIn: https://www.linkedin.com/in/pedro-henrique-s-b75396298/

GitHub: https://github.com/PedrohgdSantos

## Certificados

A área de certificados fica dentro da seção Sobre mim e substitui a antiga consulta de repositórios do GitHub. Os quatro cards atuais foram conferidos nos PDFs originais e incluem instituição, data, duração, prévia em WebP e link para o PDF em `public/certificates/`. O certificado da Udemy enviado nesta tarefa foi deixado de fora a pedido do proprietário. Para adicionar outros, atualize `src/data/certificates.ts` e guarde os arquivos em `public/certificates/`.

O carrossel centraliza o certificado atual, escurece os cards laterais e avança automaticamente a cada 3,2 segundos. A reprodução pausa quando a seção está fora da tela, a página está oculta ou o visitante interage com a área. Quem prefere movimento reduzido continua podendo navegar manualmente, sem avanço automático.

Os layouts dos cards são ilustrações criadas para este portfólio, não capturas dos projetos. A vitrine de comércio é um conceito demonstrativo. Confirmar os endereços publicados de Araujo Barber e AchouOfertas antes de adicionar os links. Formação e experiência utilizam informações fornecidas pelo proprietário em conversas anteriores; o LinkedIn bloqueou a leitura automática.

Os logotipos de Java, React, TypeScript, Angular e MySQL foram obtidos do [Devicon](https://github.com/devicons/devicon). A licença MIT correspondente está em `src/assets/tech/LICENSE.devicon.txt`.

## Validação

`npm run build` foi executado com sucesso. A conferência visual no navegador e a publicação ainda não foram realizadas.
