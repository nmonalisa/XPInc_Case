# XPInc Case: Processo seletivo para vaga Assistente MLOPs

 ## Objetivo: :white_check_mark:

O objetivo deste projeto foi construir um servidor de API REST com duas diferentes rotas. <br>
Além disso, também foi construída uma aplicação web que interage com o servidor e consome os dados da API em 2 diferentes telas.

## Detalhes Técnicos :wrench: 

### 1.Ferramentas Utilizadas 

#### 1.1.Backend (Servidor)

A API foi construída em Python, com o uso das bibliotecas externas FastAPI e Uvicorn. Durante o desenvolvimento, as requisições para as rotas fotam testadas usando o Postman.
Também foi utilizada a ferramenta Docker para encapsulamento/conteinerização do serviço de backend.

#### 1.2.Front-End (Aplicação Web)

A aplicação foi construída com HTML/CSS/Javascript. Foi utilizada a biblioteca externa "axios" para fazer as requisições http para o servidor.


### 2.Estrutura de arquivos

> ___APP/___ <br>
> |- images/: diretório com as imagens usadas na aplicação web <br>
> |- services/: <br>
> |-------- services.js: contém as funções que realizam as requisições http para o servidor <br>
> |- src/: <br>
> |-------- health.js: arquivo com a lógica da página 'Health' <br>
> |-------- fibonacci.js: arquivo com a lógica da página 'Fibonacci' <br>
> |- style/: <br>
> |-------- style.css: arquivo de estilização da aplicação <br>
> |- health.html: estrutura HTML da página 'Health' <br>
> |- fibonacci.html: estrutura HTML da página 'Fibonacci' <br><br>

> ___SERVER/___ <br>
> |- _init_.py: arquivo que marca o diretório como um módulo Python <br>
> |- functions.py: contém o algoritmo que calcula a Sequência de Fibonacci <br>
> |- main.py: arquivo que contém a implementação das rotas e as configurações do servidor <br>
> |- models.py: arquivo com os tipos usados nas variáveis <br>
> |- Dockerfile: arquivo com as instruções de criação da imagem docker do backend da aplicação <br>
> |- requirements.txt: arquivo com as dependências de pacotes utilizados do backend da aplicação <br>


### 3.Rotas

- /api/health: responde a uma requisição do tipo GET com uma breve mensagem sobre o estado de saúde do usuário que solicitou o dado.
- /api/fibonacci: responde a uma requisição do tipo POST com uma lista contendo a sequência de Fibonacci. O número de elementos da sequência a ser recebido deve ser passado no corpo da requisição através da chave "elements", conforme exemplo abaixo:

**Request:** `{ "elements": 7 }` <br>
 
 **Response:** `{"message": "Número de elementos solicitados: 7", "value": [0,1,1,2,3,5,8]}`


### 4.Criação  e execução da imagem docker do servidor
Após garantir que o docker está instalado na sua máquina, vá para a raiz do projeto onde está o arquivo Dockerfile com as instruções para criação da imagem e rode o seguinte comando no terminal:

> `docker build -t <nome_usuario_docker/nome_da_imagem> .` <br>

Exemplo: <br>

![Build da imagem docker do backend da aplicação](./app/images/docker_build_img.png)


Ainda no terminal, suba um container utilizando a imagem base que acabou de criar:

> `docker container run -p 8000:8000 <nome_da_imagem>`

Se o serviço foi iniciado com sucesso, você deverá ver o log do terminal acusando a subida do servidor, além do seu container ativo na interface do Docker:

![Execução do container](./app/images/docker_running_container.png)

### 1.6.Iniciando a aplicação web para consumo do backend

Agora que você já possui um servidor ativo expondo a API, já pode iniciar também a aplicação web cliente. Para isso, instale um servidor web na sua máquina e suba a aplicação web a partir do arquivo health.html que está no diretório app/. 

Se você estiver utilizando o VSCode, recomendo a extensão Live Server. Basta instalar a extensão, clicar com o botão direito no arquivo "healt.html" e selecionar a opção: "Open With Live Server". Se tudo foi executado corretamente, você deverá ser capaz de ver a tela inicial da aplicação consumindo os dados da API, como na figura abaixo:

![Aplicação Web](./app/images/web_app.png)
