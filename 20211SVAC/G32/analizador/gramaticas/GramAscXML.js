/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var GramAscXML = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[6,7],$V2=[1,11],$V3=[12,17],$V4=[1,16],$V5=[9,12,17],$V6=[1,32],$V7=[1,33],$V8=[1,34],$V9=[1,35],$Va=[1,36],$Vb=[7,8,9,17,21,23,24,25,26,27,28];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"PROLOGO":4,"NODORAICES":5,"EOF":6,"ETABRE":7,"INTERR":8,"IDENTIFICADOR":9,"ASIGN":10,"CADENA":11,"ETCIERRE":12,"NODORAIZ":13,"OBJETO":14,"LISTAATRIBUTOS":15,"OBJETOS":16,"BARRA":17,"LISTA_IDS":18,"ATRIBUTOS":19,"ATRIBUTO":20,"TEXTO":21,"HREF":22,"DIGITO":23,"LT":24,"GT":25,"AMP":26,"APOS":27,"QUOT":28,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",7:"ETABRE",8:"INTERR",9:"IDENTIFICADOR",10:"ASIGN",11:"CADENA",12:"ETCIERRE",17:"BARRA",21:"TEXTO",23:"DIGITO",24:"LT",25:"GT",26:"AMP",27:"APOS",28:"QUOT"},
productions_: [0,[3,3],[4,11],[5,2],[5,1],[13,1],[14,9],[14,9],[14,5],[16,2],[16,1],[15,1],[15,0],[19,2],[19,1],[20,3],[18,2],[18,2],[18,2],[18,2],[18,2],[18,2],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[22,1],[22,1],[22,1],[22,1],[22,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'INIT -> PROLOGO NODORAICES EOF', 
                                        reglas:'INIT.lista = NODORAICES.lista; return(prologo: PROLOGO.lista, cuerpo: INIT.lista);'}));
                                        this.$ = $$[$0-1]; return { prologo: $$[$0-2], cuerpo: this.$}; 
break;
case 2:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'PROLOGO -> ETABRE INTERR IDENTIFICADOR IDENTIFICADOR ASIGN CADENA IDENTIFICADOR ASIGN CADENA INTERR ETCIERRE', 
                                                                                                            reglas:'PROLOGO.Prolog = new Prologo(CADENA1.val, CADENA2.val);'}));
                                                                                                            this.$ = new Prologo($$[$0-5],$$[$0-2]); 
break;
case 3:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'NODORAICES -> NODORAICES NODORAIZ', 
                                reglas:'NODORAICES.lista = NODORAICES1.lista; NODORAICES.lista.push(NODORAIZ);'}));
                                $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 4:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'NODORAICES -> NODORAIZ', 
                                reglas:'NODORAICES.lista = [NODORAIZ];'}));
                                this.$ = [$$[$0]]; 
break;
case 5:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'NODORAIZ -> OBJETO', 
                        reglas:'NODORAIZ.lista = OBJETO.lista;'}));
                        this.$ = $$[$0]; 
break;
case 6:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'OBJETO -> ETABRE IDENTIFICADOR LISTAATRIBUTOS ETCIERRE OBJETOS ETABRE BARRA IDENTIFICADOR ETCIERRE', 
                                                                                                    reglas:'OBJETO.Objeto = new Objeto(IDENTIFICADOR.val, \'  \', linea.val, columna.val, LISTAATRIBUTOS.lista, OBJETOS.lista, true);'}));
                                                                                                    /*Validación de etiqueta de apertura y de cierre iguales*/
                                                                                                    if($$[$0-7] != $$[$0-1])
                                                                                                    {                                                                                                        
                                                                                                        tablaErrores.Errores.getInstance().push(new errorGram.Error({ tipo: 'Semántico', linea: `${yylineno + 1}`, descripcion: `Etiqueta de apertura "${$$[$0-7]}" y de cierre "${$$[$0-1]}" no coinciden. Columna: ${this._$.first_column + 1}.`}));
                                                                                                    };
                                                                                                    this.$ = new Objeto($$[$0-7],'',_$[$0-8].first_line, _$[$0-8].first_column,$$[$0-6],$$[$0-4],true); 
break;
case 7:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'OBJETO -> ETABRE IDENTIFICADOR LISTAATRIBUTOS ETCIERRE LISTA_IDS ETABRE BARRA IDENTIFICADOR ETCIERRE', 
                                                                                                    reglas:'OBJETO.Objeto = new Objeto(IDENTIFICADOR.val, LISTA_IDS.lista, linea.val, columna.val, LISTAATRIBUTOS.lista, [], true);'}));
                                                                                                    /*Validación de etiqueta de apertura y de cierre iguales*/
                                                                                                    if($$[$0-7] != $$[$0-1])
                                                                                                    {                                                                                                        
                                                                                                        tablaErrores.Errores.getInstance().push(new errorGram.Error({ tipo: 'Semántico', linea: `${yylineno + 1}`, descripcion: `Etiqueta de apertura "${$$[$0-7]}" y de cierre "${$$[$0-1]}" no coinciden. Columna: ${this._$.first_column + 1}.`}));
                                                                                                    };
                                                                                                    this.$ = new Objeto($$[$0-7],$$[$0-4],_$[$0-8].first_line, _$[$0-8].first_column,$$[$0-6],[],true); 
break;
case 8:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'OBJETO -> ETABRE IDENTIFICADOR LISTAATRIBUTOS BARRA ETCIERRE', 
                                                                                                    reglas:'OBJETO.Objeto = new Objeto(IDENTIFICADOR.val, \'  \', linea.val, columna.val, LISTAATRIBUTOS.lista, [], false);'}));
                                                                                                    this.$ = new Objeto($$[$0-3],'',_$[$0-4].first_line, _$[$0-4].first_column,$$[$0-2],[],false); 
break;
case 9:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'OBJETOS -> OBJETOS OBJETO', 
                            reglas:'OBJETOS.lista = OBJETOS1.lista; OBJETOS.lista.push(OBJETO);'}));
                            $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 10:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'OBJETOS -> OBJETOS OBJETO', 
                            reglas:'OBJETOS.lista = [OBJETO];'}));
                            this.$ = [$$[$0]]; 
break;
case 11:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTAATRIBUTOS -> ATRIBUTOS',
                                reglas:'LISTAATRIBUTOS.lista = ATRIBUTOS.lista;'}));
                                this.$ = $$[$0]; 
break;
case 12:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTAATRIBUTOS -> ε',
                                reglas:'LISTAATRIBUTOS.lista = [];'}));
                                this.$ = []; 
break;
case 13:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'ATRIBUTOS -> ATRIBUTOS ATRIBUTO', 
                                reglas:'ATRIBUTOS.lista = ATRIBUTOS1.lista; ATRIBUTOS.lista.push(ATRIBUTO)'}));
                                $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 14:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'ATRIBUTOS -> ATRIBUTO', 
                                reglas:'ATRIBUTOS.lista = [ATRIBUTO];'}));
                                this.$ = [$$[$0]]; 
break;
case 15:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'ATRIBUTO -> IDENTIFICADOR ASIGN CADENA', 
                                    reglas:'ATRIBUTO.Atributo = new Atributo(IDENTIFICADOR.val, CADENA.val, linea.val, columna.val);'}));
                                    this.$ = new Atributo($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 16:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> LISTA_IDS IDENTIFICADOR', 
                                reglas:'LISTA_IDS.lista = LISTA_IDS1.lista; LISTA_IDS.lista.push(IDENTIFICADOR.val);'})); 
                                $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 17:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> LISTA_IDS TEXTO', 
                                reglas:'LISTA_IDS.lista = LISTA_IDS1.lista; LISTA_IDS.lista.push(TEXTO.val);'}));
                                $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 18:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> LISTA_IDS HREF', 
                                reglas:'LISTA_IDS.lista = LISTA_IDS1.lista; LISTA_IDS.lista.push(HREF.val);'})); $$[$0-1].push($$[$0]); 
                                this.$ = $$[$0-1]; 
break;
case 19:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> LISTA_IDS DIGITO', 
                                reglas:'LISTA_IDS.lista = LISTA_IDS1.lista; LISTA_IDS.lista.push(DIGITO.val);'})); $$[$0-1].push($$[$0]);
                                this.$ = $$[$0-1]; 
break;
case 20:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> LISTA_IDS INTERR', 
                                reglas:'LISTA_IDS.lista = LISTA_IDS1.lista; LISTA_IDS.lista.push(INTERR.val);'}));
                                $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 21:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> LISTA_IDS BARRA', 
                                reglas:'LISTA_IDS.lista = LISTA_IDS1.lista; LISTA_IDS.lista.push(BARRA.val);'}));
                                $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 22:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> IDENTIFICADOR', 
                                reglas:'LISTA_IDS.lista = [IDENTIFICADOR.val]'}));
                                this.$ = [$$[$0]]; 
break;
case 23:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> TEXTO', 
                                reglas:'LISTA_IDS.lista = [TEXTO.val]'}));
                                this.$ = [$$[$0]]; 
break;
case 24:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> HREF', 
                                reglas:'LISTA_IDS.lista = [HREF.val]'}));
                                this.$ = [$$[$0]]; 
break;
case 25:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> DIGITO', 
                                reglas:'LISTA_IDS.lista = [DIGITO.val]'}));
                                this.$ = [$$[$0]]; 
break;
case 26:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> INTERR', 
                                reglas:'LISTA_IDS.lista = [INTERR.val]'}));
                                this.$ = [$$[$0]]; 
break;
case 27:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'LISTA_IDS -> BARRA', 
                                reglas:'LISTA_IDS.lista = [BARRA.val]'}));
                                this.$ = [$$[$0]]; 
break;
case 28:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'HREF -> LT', reglas:' HREF.val = \'<\';'})); this.$ = '<'; 
break;
case 29:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'HREF -> GT', reglas:' HREF.val = \'>\';'})); this.$ = '>'; 
break;
case 30:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'HREF -> AMP', reglas:' HREF.val = \'&\';'})); this.$ = '&'; 
break;
case 31:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'HREF -> APOS', reglas:' HREF.val = \' \' \';'})); this.$ = '\''; 
break;
case 32:
 RepoGram.RepGramAscXML.getInstance().push(new ValAsc.ValAscendente({produccion:'HREF -> QUOT', reglas:' HREF.val = \' \" \';'})); this.$ = '\"'; 
break;
}
},
table: [{3:1,4:2,7:[1,3]},{1:[3]},{5:4,7:$V0,13:5,14:6},{8:[1,8]},{6:[1,9],7:$V0,13:10,14:6},o($V1,[2,4]),o($V1,[2,5]),{9:$V2},{9:[1,12]},{1:[2,1]},o($V1,[2,3]),o($V3,[2,12],{15:13,19:14,20:15,9:$V4}),{9:[1,17]},{12:[1,18],17:[1,19]},o($V3,[2,11],{20:20,9:$V4}),o($V5,[2,14]),{10:[1,21]},{10:[1,22]},{7:$V0,8:[1,30],9:[1,26],14:25,16:23,17:[1,31],18:24,21:[1,27],22:28,23:[1,29],24:$V6,25:$V7,26:$V8,27:$V9,28:$Va},{12:[1,37]},o($V5,[2,13]),{11:[1,38]},{11:[1,39]},{7:[1,40],14:41},{7:[1,42],8:[1,47],9:[1,43],17:[1,48],21:[1,44],22:45,23:[1,46],24:$V6,25:$V7,26:$V8,27:$V9,28:$Va},{7:[2,10]},o($Vb,[2,22]),o($Vb,[2,23]),o($Vb,[2,24]),o($Vb,[2,25]),o($Vb,[2,26]),o($Vb,[2,27]),o($Vb,[2,28]),o($Vb,[2,29]),o($Vb,[2,30]),o($Vb,[2,31]),o($Vb,[2,32]),o($V1,[2,8]),o($V5,[2,15]),{9:[1,49]},{9:$V2,17:[1,50]},{7:[2,9]},{17:[1,51]},o($Vb,[2,16]),o($Vb,[2,17]),o($Vb,[2,18]),o($Vb,[2,19]),o($Vb,[2,20]),o($Vb,[2,21]),{10:[1,52]},{9:[1,53]},{9:[1,54]},{11:[1,55]},{12:[1,56]},{12:[1,57]},{8:[1,58]},o($V1,[2,6]),o($V1,[2,7]),{12:[1,59]},{7:[2,2]}],
defaultActions: {9:[2,1],25:[2,10],41:[2,9],59:[2,2]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    //Req. para recopilación de errores
    const errorGram = require("../arbol/error");
    const tablaErrores = require("../arbol/errores");

    //Req. para el manejo de datos
    const {Objeto} = require("../abstractas/objeto");
    const {Atributo} = require("../abstractas/atributo");
    const {Prologo} = require("../abstractas/prologo");

    //Req. para elaborar el reporte gramatical
    const ValAsc = require("../Reportes/ValAscendente");
    const RepoGram = require("../Reportes/RepGramAscXML");
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 'COMENTARIO';
break;
case 1:return 24
break;
case 2:return 25
break;
case 3:return 26
break;
case 4:return 27
break;
case 5:return 28
break;
case 6:return 10;
break;
case 7:return 17;
break;
case 8:return 7;
break;
case 9:return 12;
break;
case 10:return 8
break;
case 11:return 9;
break;
case 12:return 11;
break;
case 13:return 21;
break;
case 14:return 23;
break;
case 15:/*Ignorar espacios en blanco*/
break;
case 16:/*Ignorar espacios en blanco*/
break;
case 17:
  const er = new errorGram.Error({ tipo: 'Léxico', linea: `${yy_.yylineno + 1}`, descripcion: `El lexema "${yy_.yytext}" en la columna: ${yy_.yylloc.first_column + 1} no es válido.` });
  tablaErrores.Errores.getInstance().push(er);

break;
case 18:return 6;
break;
}
},
rules: [/^(?:[<][\s\S\n]*?)/i,/^(?:&lt;)/i,/^(?:&gt;)/i,/^(?:&amp;)/i,/^(?:&apos;)/i,/^(?:&quot;)/i,/^(?:=)/i,/^(?:\/)/i,/^(?:<)/i,/^(?:>)/i,/^(?:\?)/i,/^(?:([a-zA-ZñÑáéíóúÁÉÍÓÚ_])[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_-]*)/i,/^(?:["][^\"]*["])/i,/^(?:([^ \r\t\na-zA-ZñÑáéíóúÁÉÍÓÚ0-9_><\"\'&]))/i,/^(?:[0-9])/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"comment":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":true},"INITIAL":{"rules":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = GramAscXML;
exports.Parser = GramAscXML.Parser;
exports.parse = function () { return GramAscXML.parse.apply(GramAscXML, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}