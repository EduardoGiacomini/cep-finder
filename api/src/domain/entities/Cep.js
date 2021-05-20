class Cep {
    constructor(cep) {
        this.cep = cep
    }

    isValid () {
        const regexCep = /^[0-9]{8}$/
        return regexCep.test(this.cep)
    }
}
