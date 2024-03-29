const { merge } = require('lodash')

/**
 * Loads GraphQL modules
 * @exports moduleLoader
 * @param {Array} modules Modules to import
 * @param {Object} modules.schema The schema of a module
 * @param {Object} modules.schema.typeDefs The module's type defs
 * @param {Object} modules.schema.resolvers The module's resolver functions
 *
 * @module gql-module-loader
 * @returns {object} Loaded GraphQL schema
 *
 * @example
 * const { moduleLoader } = require('gql-module-loader')
 * const { schema } = moduleLoader([Root, Auth])
 */
const moduleLoader = (modules) => {
  const typeDefs = []
  const resolvers = {}
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
      merge(resolvers, mod.schema.resolvers)
    }
  }

  const schema = {
    typeDefs,
    resolvers
  }

  return { schema }
}

module.exports = { moduleLoader }
