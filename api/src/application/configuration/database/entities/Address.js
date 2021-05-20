const mongoose = require('mongoose')
const { Schema } = mongoose

const AddressSchema = new Schema({
  cep: { type: String, required: true },
  street: { type: String, required: false, default: null },
  complement: { type: String, required: false, default: null },
  neighborhood: { type: String, required: false, default: null },
  city: { type: String, required: false, default: null },
  state: { type: String, required: false, default: null },
  ibge: { type: String, required: false, default: null },
  gia: { type: String, required: false, default: null },
  ddd: { type: String, required: false, default: null },
  siafi: { type: String, required: false, default: null }
}, { timestamps: true })

const Address = mongoose.model('Address', AddressSchema)

module.exports = Address
