"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./model/Pessoa");
let p1 = new Pessoa_1.Pessoa(`Ana Clara`, `0000000000`, new Date(2006, 6, 11), `994510590`, `Hugo Zanini, 169`, 146, 42);
p1.mostrarPessoa();
p1.falar();
p1.falarFrase(`Hoje está um dia ensolarado e quente`);
p1.comer();
p1.comendoPrato(`pizza.`);
p1.andar();
p1.andarQuilometros(3);
//# sourceMappingURL=index.js.map