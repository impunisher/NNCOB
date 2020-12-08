package br.com.elyontec.cobrancaapi.resource;

import br.com.elyontec.cobrancaapi.service.IClienteService;
import br.com.elyontec.integracaosicoobclient.dto.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteResource implements Serializable {

    @Autowired
    private IClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<Cliente>> todosClientes(){
        List<Cliente> clientes = clienteService.todosClientes();
        return ResponseEntity.ok().body(clientes);
    }

}
