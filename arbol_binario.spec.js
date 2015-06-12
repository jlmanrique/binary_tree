var Arbol_Binario = require('./arbol_binario');

describe('Arboles Binarios', function() {
  
  var arbol;

  beforeEach(function() {
    arbol = new Arbol_Binario(); 
  });

  it('para un arbol vacio el tamanho del arbol es 0', function() {
     
     expect(arbol.tamanho()).toBe(0);
  });

  it('para un arbol con un elemento el tamanho del arbol es 1', function() {
     
     arbol.agregar(40);
     expect(arbol.tamanho()).toBe(1);
  });

  it('para un arbol con tres elementos el tamanho del arbol es 3', function() {
     
     arbol.agregar(40).agregar(10).agregar(60);
     expect(arbol.tamanho()).toBe(3);
  });

  it('para un arbol con cuatro elementos el tamanho del arbol es 4', function() {
     
     arbol.agregar(40).agregar(10).agregar(60).agregar(7);
     expect(arbol.tamanho()).toBe(4);
  });

  it('para un arbol vacio el listar del arbol es un arreglo vacio', function() {
     
     expect(arbol.listar()).toEqual([]);
  });

  it('para un arbol con un elemento el listado del arbol es el elemento', function() {
     
     arbol.agregar(40);
     expect(arbol.listar()).toEqual([40]);
  });

  it('para un arbol con tres elementos el listado del arbol son los 3 elementos agregados y ordenados', function() {
     
     arbol.agregar(40).agregar(10).agregar(60);
     expect(arbol.listar()).toEqual([10, 40, 60]);
  });

  it('para un arbol con cuatro elementos el listado del arbol son los 4 elementos agregados y ordenados', function() {
     
     arbol.agregar(40).agregar(10).agregar(60).agregar(7);
     expect(arbol.listar()).toEqual([7, 10, 40, 60]);
  });

  it('para un arbol con tres elementos el limpiar del arbol retorna un arbol vacio', function() {
     
     arbol.agregar(40).agregar(10).agregar(60).limpiar();
     expect(arbol.tamanho()).toBe(0);
  });

  it('para un arbol vacio el encontrar un elemento debe retornar null', function() {
     
     expect(arbol.encontrar(10)).toBeNull();
  });

  it('para un arbol con un elemento el encontrar el valor del elemento debe devolver el arbol', function() {
     
     arbol.agregar(40);
     expect(arbol.encontrar(40).listar()).toEqual([40]);
  });

  it('para un arbol con tres elementos el encontrar el valor de la derecha debe retornar el arbol de la derecha', function() {
     
     arbol.agregar(40).agregar(10).agregar(60);
     expect(arbol.encontrar(60).listar()).toEqual([60]);
  });

  it('para un arbol con cuatro elementos el encontrar del arbol son los 4 elementos agregados y ordenados', function() {
     
     arbol.agregar(40).agregar(10).agregar(60).agregar(7);
     expect(arbol.encontrar(8)).toBeNull();
  });

  it('para un arbol vacio la altura del arbol es 0', function() {
     
     expect(arbol.altura()).toBeNull(null);
  });

  it('para un arbol con un elemento la altura del arbol es 1', function() {
     
     arbol.agregar(40);
     expect(arbol.altura()).toBe(0);
  });

  it('para un arbol con cuatro elementos la altura del arbol es el 1 mas el maximo de las alturas de la izquierda y derecha', function() {
     
     arbol.agregar(40).agregar(10).agregar(60).agregar(7);
     expect(arbol.altura()).toBe(2);
  });  

});