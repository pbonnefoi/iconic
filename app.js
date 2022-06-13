'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const { logger, loggerReady } = require('./services/utils/logger.service')

module.exports = async function (fastify, opts) {
  await loggerReady()
  // all exports that contain the logger inside should be placed here
  // Place here your custom code!
  // Examples for logs
  logger.info('Application start ...')
  logger.error('Error Log Example !...')

  // Examples for child logs
  const childLogger = logger.child({ a: 'property' })
  childLogger.info('This is a child Log ! ')

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
