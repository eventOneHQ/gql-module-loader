<h3 align="center">GraphQL Module Loader</h3>

<div align="center">

![npm](https://img.shields.io/npm/v/gql-module-loader.svg)
[![GitHub Issues](https://img.shields.io/github/issues/eventOneHQ/gql-module-loader.svg)](https://github.com/eventOneHQ/gql-module-loader/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/eventOneHQ/gql-module-loader.svg)](https://github.com/eventOneHQ/gql-module-loader/pulls)
[![GitHub license](https://img.shields.io/github/license/eventOneHQ/gql-module-loader.svg)](https://github.com/eventOneHQ/gql-module-loader/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

</div>

---

<p align="center"> Easily modularize your GraphQL schemas
    <br> 
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🏁 Getting Started <a name = "getting_started"></a>

Getting started with `gql-module-loader` is pretty easy and straight forward.

Install the `gql-module-loader` package into your project:

```
npm i gql-module-loader
```

Create a module:

```javascript
// modules/auth.js
const { gql } = require('apollo-server-express')

const Auth = {
  schema: {
    typeDefs: gql``,
    resolvers: {}
  }
}

module.exports = Auth
```

Then load the modules all together and use the combined schema:

```javascript
// server.js
const { moduleLoader } = require('gql-module-loader')
const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer } = require('apollo-server-express')

const Root = require('./modules/root')
const Auth = require('./modules/auth')

const { schema } = moduleLoader([Root, Auth])

const server = new ApolloServer({
  schema: makeExecutableSchema(schema)
})
```

## 🎈 Usage <a name="usage"></a>

See the full docs [here](https://oss.eventone.page/gql-module-loader).

## ✍️ Authors <a name = "authors"></a>

- [@nprail](https://github.com/nprail) - Maintainer

See also the list of [contributors](https://github.com/eventOneHQ/gql-module-loader/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
