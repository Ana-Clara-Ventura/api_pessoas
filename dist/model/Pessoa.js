"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getCpf() {
        return this.cpf;
    }
    setData_Nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getData_Nascimento() {
        return this.data_nascimento;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getTelefone() {
        return this.telefone;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getEndereco() {
        return this.endereco;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getAltura() {
        return this.altura;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    getPeso() {
        return this.peso;
    }
    falar() {
        console.log(`${this.nome} está falando.`);
    }
    falarFrase(frase) {
        console.log(`${this.nome} está falando ${frase}`);
    }
    andar() {
        console.log(`${this.nome} está andando.`);
    }
    andarQuilometros(quilometros) {
        console.log(`${this.nome} está andando ${quilometros} km.`);
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    comendoPrato(prato) {
        console.log(`${this.nome} está comendo ${prato}`);
    }
    mostrarPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.cpf}
        Data de Nascimento: ${this.data_nascimento}
        Telefone: ${this.telefone}
        Endereço: ${this.endereco}
        Altura: ${this.altura}
        Peso: ${this.peso}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map