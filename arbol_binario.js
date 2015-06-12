function Arbol_Binario(){
  this.valor = null;
  this.arbol_izquierdo = null;
  this.arbol_derecho = null;
}

Arbol_Binario.prototype.tamanho = function(){
  var tamanho = 0;
  if (this.valor != null){
    if (this.arbol_izquierdo == null && this. arbol_derecho == null){
      tamanho = 1;
    } else {
      tamanho = 1;
      if (this.arbol_izquierdo != null){
        tamanho = tamanho + this.arbol_izquierdo.tamanho();
      }
      if (this.arbol_derecho != null){
        tamanho = tamanho + this.arbol_derecho.tamanho();
      }
    } 
  }
  return tamanho;
}

Arbol_Binario.prototype.agregar = function(valor){
  if (this.valor == null){
    this.valor = valor;
  } else {
    if (this.valor > valor){
      if (this.arbol_izquierdo == null){
        this.arbol_izquierdo = new Arbol_Binario().agregar(valor);
      } else {
        this.arbol_izquierdo.agregar(valor);
      }
    } else {
      if (this.arbol_derecho == null){
        this.arbol_derecho = new Arbol_Binario().agregar(valor);
      } else {
        this.arbol_derecho.agregar(valor);
      }
    }
  }
  return this;
}

Arbol_Binario.prototype.listar = function() {
  var listado = [];
  if (this.valor != null){
    if (this.arbol_izquierdo == null && this.arbol_derecho == null){
      listado.push(this.valor);
    } else {
      if (this.arbol_izquierdo != null){
        var lista_izquierda = this.arbol_izquierdo.listar();
        lista_izquierda.forEach(function(elemento){
          listado.push(elemento);
        });
      }

      listado.push(this.valor);

      if (this.arbol_derecho != null){
        var lista_derecha = this.arbol_derecho.listar();
        lista_derecha.forEach(function(elemento){
          listado.push(elemento);
        });
      }
    }
  }
  return listado;
};

Arbol_Binario.prototype.encontrar = function(valor){
  var retorno = null;
  if (this.valor != null){
    if (this.valor == valor){
      return this;
    } else {
      if (this.valor > valor){
        if (this.arbol_izquierdo != null){
          retorno = this.arbol_izquierdo.encontrar(valor);
        }
      } else {
        if (this.arbol_derecho != null){
          retorno = this.arbol_derecho.encontrar(valor);
        }
      }
    }
  }
  return retorno;
}

Arbol_Binario.prototype.altura = function() {
  
  var altura = 0;
  if (this.valor != null){
    if (this.arbol_izquierdo == null && this.arbol_derecho==null){
      altura = 1;
    } else {
      var altura_izquierda = 0;
      var altura_derecha = 0;
      if (this.arbol_izquierdo != null){
        altura_izquierda = this.arbol_izquierdo.altura();
      }
      if (this.arbol_derecho != null){
        altura_derecha = this.arbol_derecho.altura();
      }
      if (altura_izquierda >= altura_derecha){
        altura = altura_izquierda;
      } else {
        altura = altura_derecha;
      }
      altura= altura +1;
    }
  }
  return altura;
};

Arbol_Binario.prototype.limpiar = function(){
  this.valor = null;
  this.arbol_izquierdo = null;
  this.arbol_derecho = null;
  return this;
}

module.exports = Arbol_Binario;