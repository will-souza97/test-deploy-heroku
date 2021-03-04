import { Schema, model } from 'mongoose';

const FuncionarioSchema = new Schema({
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
  senha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});
export default model('Funcionario', FuncionarioSchema);
