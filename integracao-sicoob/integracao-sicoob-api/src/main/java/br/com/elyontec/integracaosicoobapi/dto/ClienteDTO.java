package br.com.elyontec.integracaosicoobapi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDTO implements Serializable {

    private Long idUsuario;

    private String nome;

    private String email;

    private String cpf;

    private String ddd;

    private String telefone;
}
