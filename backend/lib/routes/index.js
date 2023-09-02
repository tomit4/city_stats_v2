'use strict'

module.exports = async fastify => {
    await fastify.register(require('./states/get-all-states'))
    await fastify.register(require('./states/get-single-state'))
    await fastify.register(require('./states/get-single-state-with-field'))
    await fastify.register(
        require('./states/get-single-state-with-field-details'),
    )
}
