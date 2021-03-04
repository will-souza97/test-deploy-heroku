import Funcionario from '../models/Funcionario';

class FuncionarioController {
  // Lista Funcionarios
  async index(req, res) {
    const funcionario = await Funcionario.findById(req.params.id);

    if (!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    return res.status(200).json(funcionario);
  }

  // Lista Funcionario
  async show(req, res) {
    const funcionario = await Funcionario.findById(req.params.id);

    if (!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    return res.status(200).json(funcionario);
  }

  // Criar Funcionario
  async store(req, res) {
    const { email, cpf } = req.body;
    const funcionario = await Funcionario.findOne(email, cpf);

    if (funcionario) {
      return res.status(400).json({
        error: 'Este Funcionario já existe.',
      });
    }

    await new Funcionario(req.body);

    await funcionario.save();
    return res.status(201).json(req.body);
  }

  // Atualizar Funcionario
  async update(req, res) {
    const funcionario = await Funcionario.findById(req.params.id);
    if (!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    const { nome, cpf, email, senha, telefone } = req.body;
    await funcionario.updateOne({
      nome,
      cpf,
      email,
      senha,
      telefone,
    });

    return res.status(200).json(funcionario);
  }

  // Deletar Funcionario
  async delete(req, res) {
    const funcionario = await Funcionario.findById(req.params.id);
    if (!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    await funcionario.deleteOne();

    return res.status(200).json(funcionario);
  }
}

export default new FuncionarioController();
