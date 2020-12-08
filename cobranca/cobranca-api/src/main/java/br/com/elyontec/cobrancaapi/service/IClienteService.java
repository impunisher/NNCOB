package br.com.elyontec.cobrancaapi.service;

import br.com.elyontec.integracaosicoobclient.dto.Cliente;
import java.util.List;

public interface IClienteService {

    List<Cliente> todosClientes();

}
