export class Pessoa {
    nome: string;
    cpf: string;
    rg: string;
    sexo: string;
    nascimento: Date;
    estadoCivil: string;
    endereco = new Endereco();
    emails = new Array<Email>();
    telefones = new Array<Telefone>();
}

export class Divida {
    dataRemessa: Date;
    rendaPresumida: Number;	
    descricaoCBO: string;	
    contrato: number;	
    dataEnquadramento: Date;	
    diasAtraso: number;	
    valorEnquadrado: number;	
    saldo_atual: number;	
    dataRetirada: Date;	
    produto: string;	
    contratoAjuizado: boolean;	
    cooperadoAtivo: boolean;	
    codigoProduto: string;
    pessoa = new Pessoa();
}

export class Endereco {
    id: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;	
}

export class Telefone {
    id: number;
    telefone: string;	
    qualificacao: string;
}

export class Email {
    id: number;
    email: string;
}