## Projeto Trybesmith
Este projeto foi criado utilizando TypeScript. Ele tem como objetivo simular uma loja de produtos medievais e para isso foi criada uma API com 6 endpoints que realizam operações de leitura e escrita no banco de dados MySQL.

## Tecnologias
* Node.js
* TypeScript
* JSON Web Token (JWT)
* Docker
* docker-compose
* SQL
* MySQL
* Workbench

## Instalando Dependências
Clone o repositório do GitHub

```javascript
 git clone git@github.com:victorhdoliveira/trybesmith.git
```

### Com Docker
> Backend

1. Rode os serviços node e db com o seguinte comando: 
```bash
docker-compose up -d
``` 

2. Abra o terminal interativo do container: 
```bash
docker exec -it trybesmith bash
``` 

3. Instale as dependências dentro do container: 
```bash
npm install
``` 
4. Execute a aplicação
```bash
npm run dev
``` 
> Testes

5. Dentro do terminal do container:
```bash
npm test
``` 

:warning: Atenção: O git dentro do container não vem configurado com suas credenciais;

### Sem Docker

Instale as dependências
```bash
npm install
``` 
Execute a aplicação
```bash
npm run dev
``` 
Rode os testes
```bash
npm test
``` 
