package br.com.elyontec.cobranca.api.resource;

import br.com.elyontec.cobranca.api.entity.Divida;
import br.com.elyontec.cobranca.api.service.IDividaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/dividas")
public class DividasResource implements Serializable {

    @Autowired
    private IDividaService dividaService;

    @PostMapping
    public void cadastrarDividas(List<Divida> dividas){
        dividaService.cadastrarDividas(dividas);
    }
}
