package br.com.elyontec.integracaosicoobapi.resouce;

import br.com.elyontec.integracaosicoobapi.dto.ClienteDTO;
import br.com.elyontec.integracaosicoobapi.service.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteResource {

    @Autowired
    private IClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> todosClientes(){
        List<ClienteDTO> clientes = clienteService.todosClientes();
        return ResponseEntity.ok().body(clientes);
    }

}
