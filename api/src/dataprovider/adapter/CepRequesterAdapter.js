const { Address } = require('../../domain/entities')

class CepRequesterAdapter {
    static toDomain (cepRequesterAddress) {
        const { cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi } = cepRequesterAddress
        return new Address(cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)
    }
}

module.exports = CepRequesterAdapter
