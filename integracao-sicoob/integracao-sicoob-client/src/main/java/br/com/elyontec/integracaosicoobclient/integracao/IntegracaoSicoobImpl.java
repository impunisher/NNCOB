package br.com.elyontec.integracaosicoobclient.integracao;

import br.com.elyontec.integracaosicoobclient.dto.Cliente;
import br.com.elyontec.integracaosicoobclient.dto.ClienteLista;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Component
public class IntegracaoSicoobImpl implements  IntegracaoSicoob{

    @Value("${uri.integracao.sicoob.api}")
    private String uriIntegracaoSicoob;

    @Override
    public List<Cliente> todosClientes() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Cliente[]> response = restTemplate.getForEntity(uriIntegracaoSicoob.concat("/clientes"), Cliente[].class);
        return Arrays.asList(response.getBody());
    }

    private HttpHeaders montarCabecalho(){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }
}
