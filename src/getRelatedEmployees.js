const data = require('../data/zoo_data');

const funcionarios = data.employees;

const isManager = (id) =>
  funcionarios.some((item) => item.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const nameManager = funcionarios.filter((pessoa) => pessoa.managers.includes(managerId));
  const names = nameManager.map((element) => `${element.firstName} ${element.lastName}`);
  return names;
};

module.exports = { isManager, getRelatedEmployees };
