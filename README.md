## 💻 Resumo do projeto

Primeira API criada por mim para estudo onde possui dados mocados (são fictícios), a proposta é ela ser pública sem necessidade de autenticação pra consumir a mesma. Foi realizado a documentação da mesma utilizando o [Swagger](https://swagger.io/).

```text
⚠ ESTES PROJETOS É APENAS UM ESTUDO OS DADOS QUE ESTÃO PRESENTES SÃO FICTÍCIOS E QUALQUER SEMALHANÇA COM INFORMAÇÕES VERIDICAS É MERA CONHECIDÊNCIA
```

## 🛠 Tecnologias

#### Projeto foi construído utilizando **Node.js** e as seguintes dependências:

- **[Body Parser](https://www.npmjs.com/package/body-parser)** é um middleware capaz de converter o body da requisição para vários formatos. Um desses formatos é JSON, exatamente o que queremos.

- **[Config](https://www.npmjs.com/package/config)** para toda vez que tivermos que mudar alguma variável de ambiente porque nosso cliente pediu, teremos que alterar em vários arquivos. Este pacote config nos permite organizar a configuração da nossa aplicação e estender em qualquer arquivo.

- **[Express](https://expressjs.com/)** é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

- **[Consign](https://www.npmjs.com/package/consign)** ter que importar nossas rotas, controllers, models é pouco produtivo, então o consign nos ajuda detectando e importando na nossa aplicação.

- **[UUID](https://www.npmjs.com/package/consign)** que ao salvar nossos dados ele gera IDs únicos _(UUID)_ a versão que utilizei é o UUIDv4.

- **[JS Yaml](https://www.npmjs.com/package/js-yaml)** ajuda o javascript a ler os arquivos yaml e consequentemente a renderiza-los com mais facilidade.

## 🔨 Instalação Local

Você precisará do [Node.js](https://nodejs.org) versão 10 ou superior, instalado no seu computador para continuar.

```bash
git clone https://github.com/JhonyWalker-pixel/first-api.git

$ cd first-api
$ npm install
```

E agora para rodar nossa api localmente basta executar o seguinte comando:

```bash
$ cd first-api
$ node server.js
```

## 📖 License

Este projeto está sob a licença do MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
