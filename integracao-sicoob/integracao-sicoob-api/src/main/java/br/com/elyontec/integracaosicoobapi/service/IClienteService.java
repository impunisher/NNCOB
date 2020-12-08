package br.com.elyontec.integracaosicoobapi.service;

import br.com.elyontec.integracaosicoobapi.dto.ClienteDTO;

import java.util.List;

public interface IClienteService {

    List<ClienteDTO> todosClientes();
}
