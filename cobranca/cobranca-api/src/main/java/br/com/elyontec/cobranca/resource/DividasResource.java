package br.com.elyontec.cobranca.resource;

import br.com.elyontec.cobranca.entity.Divida;
import br.com.elyontec.cobranca.service.IDividaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/dividas")
public class DividasResource implements Serializable {

    @Autowired
    private IDividaService dividaService;

    @GetMapping
    public ResponseEntity<List<Divida>> todasDividas(){
        List<Divida> dividas = dividaService.todasDividas();
        return ResponseEntity.ok(dividas);
    }

    @PostMapping
    @RequestMapping("/importar-dados")
    public void importarDadosUpload(@RequestParam("file") MultipartFile file, ModelMap modelMap){
        dividaService.importarDivida(file);
    }
}
