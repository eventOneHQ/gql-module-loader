# GraphQL Module Loader

## Usage

```javascript
const { moduleLoader } = require('gql-module-loader')
const { ApolloServer } = require('apollo-server-express')

const Root = {
  schema: {
    typeDefs: gql``,
    resolvers: {}
  }
}
const Auth = {
  schema: {
    typeDefs: gql``,
    resolvers: {}
  }
}

const { schema, rawSchema } = moduleLoader([Root, Auth])

const server = new ApolloServer({
  schema
})
```
