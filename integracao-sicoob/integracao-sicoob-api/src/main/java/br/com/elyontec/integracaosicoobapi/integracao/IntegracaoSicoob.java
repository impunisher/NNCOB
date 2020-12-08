package br.com.elyontec.integracaosicoobapi.integracao;

import br.com.elyontec.integracaosicoobapi.dto.ClienteDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class IntegracaoSicoob {

    @Value("${uri.api.sicoob}")
    private String uriApiSicoob;

    //TODO - Aguardando documentação para prosseguir com desenvolvimento
    public List<ClienteDTO> todosClientes(){
        List<ClienteDTO> clientes = new ArrayList<>();
        clientes.add(new ClienteDTO(1l, "Daniel Santos Oliveira", "danielso21@gmail.com", "000.111.222.333-40", "61", "99999-8888"));
        clientes.add(new ClienteDTO(2l, "Filipe Junio Santos Gonçalo", "filipe@gmail.com", "000.111.222.333-50", "61", "777777-8888"));
        return clientes;
    }

}
