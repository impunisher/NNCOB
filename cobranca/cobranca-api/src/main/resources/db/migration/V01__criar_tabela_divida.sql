CREATE TABLE TB_DIVIDA (
    ID_DIVIDA           SERIAL          not null,
    DT_REMESSA          DATE            not null,
    NO_PESSOA           varchar(255)    not null,
    NR_CPF              char(20)        not null,
    DS_SEXO             varchar (20)         null,
    NR_RG               varchar(20)     not null,
    DT_NASCIMENTO       date            not null,
    ST_CIVIL            varchar(20)     not null,
    DS_ENDERECO         varchar(255)    not null,
    NR_ENDERECO         numeric(6)      null,
    DS_COMPLEMENTO      varchar(255)    null,
    NO_BAIRRO           varchar(100)    not null,
    NO_CIDADE           varchar(40)     not null,
    NO_UF               varchar(40)     not null,
    NR_CEP              char(8)         not null,
    NR_TELEFONE_1       varchar(15)     null,
    DS_QUALIFICACAO_1   varchar(40)     null,
    NR_TELEFONE_2       varchar(15)     null,
    DS_QUALIFICACAO_2   varchar(40)     null,
    NR_TELEFONE_3       varchar(15)     null,
    DS_QUALIFICACAO_3   varchar(40)     null,
    NR_TELEFONE_4       varchar(15)     null,
    DS_QUALIFICACAO_4   varchar(40)     null,
    NR_TELEFONE_5       varchar(15)     null,
    DS_QUALIFICACAO_5   varchar(40)     null,
    NR_TELEFONE_6       varchar(15)     null,
    DS_QUALIFICACAO_6   varchar(40)     null,
    DS_EMAIL_1          varchar(100)    null,
    DS_EMAIL_2          varchar(100)    null,
    DS_EMAIL_3          varchar(100)    null,
    VL_RENDA_PRESUMIDA  decimal(10,2)   null,
    DS_CBO              varchar(255)    null,
    NR_CONTRATO         varchar(20)     not null,
    DT_ENQUADRAMENTO    date            not null,
    NR_DIAS_ATRASO      integer         not null,
    VL_ENQUADRAMENTO    decimal(10,2)   not null,
    VL_SALDO_ATUAL      decimal(10,2)   not null,
    DT_RETIRADA         date            null,
    NO_PRODUTO          varchar(255)    not null,
    ST_AJUIZADO         char(1)         not null,
    ST_ATIVO            char(1)         not null,
    CD_PRODUTO          varchar(20)     not null
);
