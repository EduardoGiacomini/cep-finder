const { FindAddressUsecase } = require('../../../src/domain/usecases/address')

describe('Caso de uso FindAddressUsecase', () => {
    test('Deve possuir o metodo execute', () => {
        const useCase = new FindAddressUsecase()
        expect(typeof useCase.execute).toBe('function')
    })

    test('Deve falhar quando o cep informado e invalido', (done) => {
        const expectedErrorMessage = 'INVALID_CEP'

        const responderMock = {
            error (error) {
                expect(error.message).toEqual(expectedErrorMessage)
                done()
            }
        }

        const useCase = new FindAddressUsecase()
        useCase.execute('79760-0000', responderMock)
    })

    test('Deve retornar o endereco do banco de dados quando estiver armazenado', (done) => {
        const storedAddress = {cep: '12345678'}
        const expectedAddress = {cep: '12345678'}

        const repositoryMock = {
            findByCep (cep) {
                return storedAddress
            }
        }

        const responderMock = {
            success (address) {
                expect(address).toStrictEqual(expectedAddress)
                done()
            }
        }

        const useCase = new FindAddressUsecase(repositoryMock)
        useCase.execute('12345678', responderMock)
    })

    test('Deve retornar o endereco da request quando nao estiver armazenado no banco de dados', (done) => {
        const storedAddress = null
        const createdAddress = {cep: '12345678'}
        const requestedAddress = {cep: '12345678'}
        const expectedAddress = {cep: '12345678'}

        const repositoryMock = {
            findByCep (cep) {
                return storedAddress
            },
            create (address) {
                return createdAddress
            }
        }

        const requesterMock = {
            find (cep) {
                return requestedAddress
            }
        }

        const responderMock = {
            success (address) {
                expect(address).toStrictEqual(expectedAddress)
                done()
            }
        }

        const useCase = new FindAddressUsecase(repositoryMock, requesterMock)
        useCase.execute('12345678', responderMock)
    })

    test('Deve falhar quando o endereco nao existir', (done) => {
        const storedAddress = null
        const requestedAddress = null
        const expectedErrorMessage = 'CEP_NOT_FOUND'

        const repositoryMock = {
            findByCep (cep) {
                return storedAddress
            }
        }

        const requesterMock = {
            find (cep) {
                return requestedAddress
            }
        }

        const responderMock = {
            notFound (error) {
                expect(error.message).toStrictEqual(expectedErrorMessage)
                done()
            }
        }

        const useCase = new FindAddressUsecase(repositoryMock, requesterMock)
        useCase.execute('12345678', responderMock)
    })
})
