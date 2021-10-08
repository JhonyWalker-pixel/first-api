## 💻 Project summary

First API created by me to study where it has mocado data (they are fictitious), the proposal is to be public without the need for authentication to consume it. It was documented using [Swagger](https://swagger.io/).

```text
⚠ THIS PROJECT IS JUST A STUDY, THE PRESENT DATA ARE FACT
   AND ANY SIMILARITY WITH TRUE INFORMATION IS MERE KNOWLEDGE
```

## 🛠 Technologies

Project was built using **Node.js** and the following dependencies:

- **[Body Parser](https://www.npmjs.com/package/body-parser)** - Is a middleware capable of converting the request body to various formats. One of those formats is JSON, exactly what we want.

- **[Config](https://www.npmjs.com/package/config)** - For every time we have to change some environment variable because our client asked, we will have to change it in several files. This config package allows us to organize our application configuration and extend into any file.

- **[Express](https://www.npmjs.com/package/express)** - Fast, unopinionated, minimalist web framework for node.

- **[Consign](https://www.npmjs.com/package/consign)** - Having to import our routes, controllers, models is not very productive, so the consign helps us detecting and importing in our application.

- **[UUID](https://www.npmjs.com/package/consign)** - That when saving our data it generates unique IDs _(UUID)_ the version I used is UUIDv4.

- **[JS Yaml](https://www.npmjs.com/package/js-yaml)** - Helps javascript to read yaml files and consequently render them more easily.

## 🔨 Local Installation

You need [Node.js](https://nodejs.org) version 10 or higher, but if you want to use [Yarn](https://yarnpkg.com/) you can also just have it on your computer to continue.

```bash
git clone https://github.com/jhonywalkeer/first-api.git

$ cd first-api
$ npm install or yarn install
```

And now to run our api locally just run the following command:

```bash
$ cd first-api
$ npm run dev or yarn run dev
```

## 📖 License

This project is under license from MIT. See the [LICENSE](LICENSE.md) file for more details.
