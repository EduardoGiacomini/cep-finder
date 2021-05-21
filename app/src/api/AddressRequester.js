const axios = require('axios')

const API_URL = 'http://localhost:8080/api'

export default class AddressRequester {
    async findAddress(cep) {
        const completeUrl = `${API_URL}/addresses/${cep}`
        const { data: address } = await axios.get(completeUrl)
        return address
    }
}
