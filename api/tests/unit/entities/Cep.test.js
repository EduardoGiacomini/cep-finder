const { Cep } = require('../../../src/domain/entities')

describe('Entidade Cep', () => {
    test('Deve ser um cep valido', () => {
        expect(new Cep('79760-000').isValid()).toBeTruthy()
        expect(new Cep('79760000').isValid()).toBeTruthy()
    })

    test('Deve ser um cep invalido', () => {
        expect(new Cep('79760-00').isValid()).toBeFalsy()
        expect(new Cep('79760-0000').isValid()).toBeFalsy()
        expect(new Cep('79760-00a').isValid()).toBeFalsy()
        expect(new Cep('7976000').isValid()).toBeFalsy()
        expect(new Cep('797600000').isValid()).toBeFalsy()
        expect(new Cep('7976000a').isValid()).toBeFalsy()
        expect(new Cep('').isValid()).toBeFalsy()
    })
})
