const { Cep } = require('../../entities')

class FindAddressUsecase {
    constructor (addressRepository, cepRequester) {
        this.addressRepository = addressRepository
        this.cepRequester = cepRequester
    }

    async execute (cepToFind, responder) {
        try {
            const cep = new Cep(cepToFind)
            this.checkIfCepIsValid(cep)

            const addressFoundFromDatabase = await this.addressRepository.findByCep(cep.getCep())
            if (addressFoundFromDatabase) {
                return responder.success(addressFoundFromDatabase)
            }

            const addressFoundFromRequester = await this.cepRequester.find(cep.getCep())
            if (addressFoundFromRequester) {
                await this.addressRepository.create(addressFoundFromRequester)
                return responder.success(addressFoundFromRequester)
            }

            responder.notFound(new Error('CEP_NOT_FOUND'))
        } catch (error) {
            responder.error(error)
        }
    }

    checkIfCepIsValid (cep) {
        if (!cep.isValid()) {
            throw new Error('INVALID_CEP')
        }
    }
}

module.exports = FindAddressUsecase
