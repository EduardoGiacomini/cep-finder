export default class CepUtil {
    static isValid(cep) {
        const regexCep = /^[0-9]{8}$/
        return regexCep.test(cep)
    }

    static removeSpecialCharacters(cep) {
        return cep.replace(/\D/g, '')
    }
}
