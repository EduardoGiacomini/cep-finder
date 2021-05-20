const { AddressRepositoryAdapter } = require('../adapter')

class AddressRepository {
    constructor (entity) {
        this.Address = entity
    }

    async create (address) {
        return this.Address.create(address)
    }

    async findByCep (cep) {
        const addressFound = await this.Address.findOne({ cep })
        if (addressFound) {
            return AddressRepositoryAdapter.toDomain(addressFound)
        }
        return null
    }
}

module.exports = AddressRepository
