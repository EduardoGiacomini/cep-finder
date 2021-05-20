const { CepUtil } = require('../utils')

class Address {
    constructor (cep, street, complement, neighborhood, city, state, ibge, gia, ddd, siafi) {
        this.cep = CepUtil.removeSpecialCharacters(cep)
        this.street = street
        this.complement = complement
        this.neighborhood = neighborhood
        this.city = city
        this.state = state
        this.ibge = ibge
        this.gia = gia
        this.ddd = ddd
        this.siafi = siafi
    }
}

module.exports = Address
