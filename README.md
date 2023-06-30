# React Router Dom - Exemplo de uso do Replace

Este projeto é um exemplo simples do uso do React Router Dom v6 com a propriedade `replace` do componente `Link`.

O projeto é uma simulação simples de um sistema de devolução de livros, que é composto por 4 rotas:

1. `/`: A rota inicial da aplicação, onde o usuário pode iniciar o processo de devolução de um livro.
2. `/devolver-livro`: A rota para a página de devolução de um livro, onde o usuário pode prosseguir para a confirmação da devolução.
3. `/confirmar-devolucao`: A rota para a página de confirmação da devolução, onde o usuário pode confirmar a devolução do livro ou cancelar a operação.
4. `/devolucao-concluida`: A rota final, que informa ao usuário que a devolução do livro foi concluída.

## Publicação para visualização
(https://main--benevolent-zabaione-a0c20a.netlify.app/)[https://www.google.com](https://main--benevolent-zabaione-a0c20a.netlify.app/)

## Uso do Replace

O `replace` é uma propriedade do componente `Link` do React Router Dom, que ao invés de adicionar uma nova entrada no histórico do navegador, substitui a entrada atual.

Isso é útil quando você quer que a navegação para trás não leve o usuário para certas páginas, como é o caso do fluxo de devolução de livros neste exemplo.

## Rodando o Projeto Localmente

Para rodar este projeto localmente, você precisará ter o Node.js instalado na sua máquina. Este projeto requer o Node.js versão 12 ou superior.

Siga os passos a seguir para rodar o projeto:

1. Primeiramente, clone o repositório do projeto do GitHub na sua máquina local usando o seguinte comando no terminal:

    ```bash
    git clone https://github.com/piique/test-react-router-dom.git
    ```

2. Entre no diretório do projeto:

    ```bash
    cd test-react-router-dom
    ```

3. Instale as dependências do projeto. Isso inclui `react`, `react-dom` e `react-router-dom`:

    ```bash
    npm install
    ```

    Se você preferir usar o Yarn, você pode usar:

    ```bash
    yarn install
    ```

4. Agora, você pode iniciar o projeto:

    ```bash
    npm run dev
    ```

    Ou, se estiver usando Yarn:

    ```bash
    yarn dev
    ```

5. Abra o navegador e visite `http://localhost:5173/` para visualizar o projeto.
