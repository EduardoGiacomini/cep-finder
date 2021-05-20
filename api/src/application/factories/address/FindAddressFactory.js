const { FindAddressUsecase } = require('../../../domain/usecases/address')
const { Address } = require('../../configuration/database/entities')
const { AddressRepository } = require('../../../dataprovider/repositories')
const { CepRequester } = require('../../../dataprovider/api')
const { FindAddressRoute } = require('../../../entrypoint/address')
const { ResponderFactory } = require('../../configuration')

class FindAddressFactory {
    static create (configuration) {
        const useCase = new FindAddressUsecase(new AddressRepository(Address), new CepRequester())
        return new FindAddressRoute(useCase, ResponderFactory)
    }
}

module.exports = FindAddressFactory
