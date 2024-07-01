# Simple Form Validation with Just-validate in Docker

Este projeto demonstra como criar um formulário HTML simples com validação usando a biblioteca Just-validate, servido dentro de um container Docker com Nginx.

## Estrutura do Projeto

```
simple-form-validation/
│
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── public/
│   ├── index.html
│   └── css/
│       └── styles.css
└── src/
    └── js/
        └── scripts.js
```

## Pré-requisitos

- Docker e Docker Compose instalados na sua máquina

## Como Executar o Projeto

Siga as instruções abaixo para construir e executar o container Docker.

### Passo 1: Clonar o Repositório

Clone este repositório para a sua máquina local (se aplicável):

```sh
git clone https://github.com/seu-usuario/simple-form-validation.git
cd simple-form-validation
```

### Modo de Desenvolvimento

### Passo 2: Executar o Docker Compose para Desenvolvimento

No diretório raiz do projeto, execute o seguinte comando para iniciar o container em modo de desenvolvimento:

```sh
docker-compose up
```

### Passo 3: Acessar a Aplicação

Abra o seu navegador e vá para `http://localhost:8080`. Você verá o formulário com validação em funcionamento.

### Passo 4: Atualizar os Arquivos em Tempo Real

Qualquer atualização nos arquivos dentro do diretório `public` e `src` será refletida imediatamente no container, permitindo um desenvolvimento em tempo real.

### Modo de Produção

### Passo 2: Construir a Imagem Docker

No diretório raiz do projeto, execute o seguinte comando para construir a imagem Docker:

```sh
docker build -t simple-form-validation .
```

### Passo 3: Executar o Container Docker

Após a construção da imagem, execute o seguinte comando para iniciar o container:

```sh
docker run -d -p 8080:80 simple-form-validation
```

### Passo 4: Acessar a Aplicação

Abra o seu navegador e vá para `http://localhost:8080`. Você verá o formulário com validação em funcionamento.

## Arquivos do Projeto

- `public/index.html`: Contém o HTML do formulário.
- `public/css/styles.css`: Contém os estilos CSS do formulário.
- `src/js/scripts.js`: Contém os scripts de validação com Just-validate.
- `Dockerfile`: Define a imagem Docker, configurando o servidor Nginx.
- `nginx.conf`: Configuração do servidor Nginx para servir o conteúdo estático.
- `docker-compose.yml`: Configuração do Docker Compose para desenvolvimento em tempo real.

## Tecnologias Utilizadas

- HTML5
- Just-validate
- Docker
- Docker Compose
- Nginx

## Observações

- Certifique-se de que o Docker e o Docker Compose estejam em execução antes de executar os comandos acima.
- Se você encontrar problemas ao acessar `http://localhost:8080`, verifique se a porta 8080 está disponível e não está sendo usada por outro serviço.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
