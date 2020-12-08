package br.com.elyontec.cobrancaapi.service.impl;

import br.com.elyontec.cobrancaapi.service.IClienteService;
import br.com.elyontec.integracaosicoobclient.dto.Cliente;
import br.com.elyontec.integracaosicoobclient.integracao.IntegracaoSicoob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServiceImpl implements IClienteService {

    @Autowired
    private IntegracaoSicoob integracaoSicoob;

    @Override
    public List<Cliente> todosClientes(){
        return integracaoSicoob.todosClientes();
    }

}
