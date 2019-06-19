const { makeExecutableSchema } = require('graphql-tools')

/**
 * Loads GraphQL modules
 * @exports moduleLoader
 * @param {Array} modules Modules to import
 *
 * @module gql-module-loader
 * @returns {object} Loaded GraphQL schema
 *
 * @example
 * const { moduleLoader } = require('gql-module-loader')
 * const { schema, rawSchema } = moduleLoader([Root, Auth])
 */
const moduleLoader = modules => {
  const typeDefs = []
  let resolvers = {}
  for (const mod of modules) {
    // import GraphQL schemas
    if (mod.schema) {
      // merge type defs
      if (mod.schema.typeDefs.constructor === Array) {
        typeDefs.push(...mod.schema.typeDefs)
      } else {
        typeDefs.push(mod.schema.typeDefs)
      }

      // merge resolvers
      resolvers = { ...resolvers, ...mod.schema.resolvers }
    }
  }

  const rawSchema = {
    typeDefs,
    resolvers
  }
  const schema = makeExecutableSchema(rawSchema)

  return { schema, rawSchema }
}

module.exports = { moduleLoader }
