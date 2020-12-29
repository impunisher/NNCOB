package br.com.elyontec.cobranca.api.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Endereco {

    private Long id;

    private String logradouro;

    private Integer numero;

    private String complemento;

    private String bairro;

    private String cep;

    private String cidade;

    private String uf;
}
