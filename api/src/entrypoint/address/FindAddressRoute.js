const express = require('express')

class FindAddressRoute {
    constructor (usecase, responderFactory) {
        this.usecase = usecase
        this.responderFactory = responderFactory
    }

    controller (request, response, next) {
        const responder = this.responderFactory.create(request, response, next)
        const { cep } = request.params
        this.usecase.execute(cep, responder)
    }

    getRoute () {
        const route = express.Router()
        route.get('/addresses/:cep', (request, response, next) => this.controller(request, response, next))
        return route
    }
}

module.exports = FindAddressRoute
