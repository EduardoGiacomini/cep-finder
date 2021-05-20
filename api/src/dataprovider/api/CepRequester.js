const axios = require('axios')

const { CepRequesterAdapter } = require('../adapter')

class CepRequester {
    constructor() {
        this.url = 'https://viacep.com.br/ws/'
    }

    async find (cep) {
        const completeUrl = `${this.url}/${cep}/json`
        const { data: address } = await axios.get(completeUrl)

        if (address.erro === true) {
            return null
        }

        return CepRequesterAdapter.toDomain(address)
    }
}

module.exports = CepRequester
