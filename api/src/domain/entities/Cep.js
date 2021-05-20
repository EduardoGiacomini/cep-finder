const { CepUtil } = require('../utils')

class Cep {
    constructor(cep) {
        this.cep = CepUtil.removeSpecialCharacters(cep)
    }

    isValid () {
        return CepUtil.isValid(this.cep)
    }

    getCep () {
        return this.cep
    }
}

module.exports = Cep
