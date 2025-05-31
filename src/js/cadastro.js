class cadastro {
    constructor(nome, idade, email, senha) {
        this._nome = nome;
        this._idade = idade;
        this._email = email;
        this._senha = senha;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome
    }


    get idade() {
        return this._idade;
    }

    set idade(idade) {
        this._idade = idade
    }


    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email
    }


    get senha() {
        return this._senha;
    }

    set senha(senha) {
        this._senha = senha
    }


}