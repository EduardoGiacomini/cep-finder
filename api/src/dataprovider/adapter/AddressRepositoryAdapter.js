const { Address } = require('../../domain/entities')

class AddressRepositoryAdapter {
    static toDomain (databaseAddress) {
        const { cep, street, complement, neighborhood, city, state, ibge, gia, ddd, siafi } = databaseAddress
        return new Address(cep, street, complement, neighborhood, city, state, ibge, gia, ddd, siafi)
    }
}

module.exports = AddressRepositoryAdapter
