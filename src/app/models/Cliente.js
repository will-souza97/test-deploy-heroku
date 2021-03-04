import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model('Cliente', ClienteSchema);
