package br.com.elyontec.integracaosicoobclient.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class ClienteLista implements Serializable {

    private List<Cliente> clientes;
}
