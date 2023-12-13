export class Pessoa {
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    public constructor(_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso
    }

    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    public getNome(): string {
        return this.nome;
    }

    public setCpf(_cpf: string): void {
        this.cpf = _cpf;
    }
    public getCpf(): string {
        return this.cpf;
    }

    public setData_Nascimento(_data_nascimento: Date): void {
        this.data_nascimento = _data_nascimento;
    }
    public getData_Nascimento(): Date {
        return this.data_nascimento;
    }

    public setTelefone(_telefone: string): void {
        this.telefone = _telefone;
    }
    public getTelefone(): string {
        return this.telefone;
    }

    public setEndereco(_endereco: string): void {
        this.endereco = _endereco;
    }
    public getEndereco(): string {
        return this.endereco;
    }

    public setAltura(_altura: number): void {
        this.altura = _altura;
    }
    public getAltura(): number {
        return this.altura;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }
    public getPeso(): number {
        return this.peso;
    }

    public falar(): void {
        console.log(`${this.nome} está falando.`)
    }
    public falarFrase(frase: string): void {
        console.log(`${this.nome} está falando ${frase}`)
    }

    public andar(): void {
        console.log(`${this.nome} está andando.`)
    }
    public andarQuilometros(quilometros: number): void {
        console.log(`${this.nome} está andando ${quilometros} km.`)
    }

    public comer(): void {
        console.log(`${this.nome} está comendo.`)
    }
    public comendoPrato(prato: string): void {
        console.log(`${this.nome} está comendo ${prato}`)
    }

    public mostrarPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.cpf}
        Data de Nascimento: ${this.data_nascimento}
        Telefone: ${this.telefone}
        Endereço: ${this.endereco}
        Altura: ${this.altura}
        Peso: ${this.peso}`)
    }
  
    }


