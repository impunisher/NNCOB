package br.com.elyontec.integracaosicoobclient.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class Cliente  implements Serializable {

    private Long idUsuario;

    private String nome;

    private String email;

    private String cpf;

    private String ddd;

    private String telefone;

}
