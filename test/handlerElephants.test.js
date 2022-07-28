const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se o argumento count retorna o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Verifica se ao passar o argumento names retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('Verifica se ao passar o argumento averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Verifica se ao não passar um argumento retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Verifica se ao passar um argumento que não seja uma string retorna mensagem de erro', () => {
    expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Verifica se ao passar um argumento que não exista na função retorna null', () => {
    expect(handlerElephants('')).toBeNull();
  });
  test('Verifica se ao passar o argumento location a função retorna NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
