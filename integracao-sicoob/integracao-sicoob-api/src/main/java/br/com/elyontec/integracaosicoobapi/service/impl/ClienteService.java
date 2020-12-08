package br.com.elyontec.integracaosicoobapi.service.impl;

import br.com.elyontec.integracaosicoobapi.dto.ClienteDTO;
import br.com.elyontec.integracaosicoobapi.integracao.IntegracaoSicoob;
import br.com.elyontec.integracaosicoobapi.service.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService implements IClienteService {

    @Autowired
    private IntegracaoSicoob integracao;

    @Override
    public List<ClienteDTO> todosClientes() {
        return integracao.todosClientes();
    }
}
