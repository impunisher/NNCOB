package br.com.elyontec.cobranca.api.service;

import br.com.elyontec.integracaosicoobclient.dto.Cliente;
import java.util.List;

public interface IClienteService {

    List<Cliente> todosClientes();

}
