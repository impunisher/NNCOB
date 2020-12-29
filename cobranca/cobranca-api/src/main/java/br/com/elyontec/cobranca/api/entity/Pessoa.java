package br.com.elyontec.cobranca.api.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class Pessoa {

    private Long id;

    private String nome;

    private String cpf;

    private String rg;

    private LocalDate dataNascimento;

    private EstadoCivilEnum estadoCivil;

    private Endereco endereco;

    private List<Telefone> telefones;

    private List<Email> emails;

}
