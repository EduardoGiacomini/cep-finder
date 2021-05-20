const mongoose = require('mongoose')
const { Schema } = mongoose

const AddressSchema = new Schema({
  cep: { type: String, required: true },
  street: { type: String, required: true },
  complement: { type: String, required: false, default: null },
  neighborhood: { type: String, required: false, default: null },
  city: { type: String, required: true },
  state: { type: String, required: true },
  ibge: { type: Number, required: false, default: null },
  gia: { type: Number, required: false, default: null },
  ddd: { type: Number, required: false, default: null },
  siafi: { type: Number, required: false, default: null }
}, { timestamps: true })

const Address = mongoose.model('Address', AddressSchema)

module.exports = Address
