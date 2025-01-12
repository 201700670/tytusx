export enum TIPO_OPERACION {
  OP_SUMA,
  OP_RESTA,
  OP_MULTIPLICACION,
  OP_DIVISION,
  OP_MODULAR,

  OP_MAYOR_QUE,
  OP_MENOR_QUE,
  OP_MAYOR_IGUAL,
  OP_MENOR_IGUAL,
  OP_IGUAL,
  OP_NO_IGUAL,

  OP_AND,
  OP_OR,
  OP_NOT
};

export enum TIPO_EXPRESION {
  OP_ARITMETICA,
  OP_UNARIA,
  OP_LOGICA,
  OP_RELACIONAL
}

export enum TIPO_PRIMITIVO {
  NUMERICO,
  CADENA,
  IDENTIFICADOR,
  XML
}

export enum TIPO_SIMBOLO {
  PARAMETRO,
  VARIABLE,
  FUNCION
}
