package br.com.elyontec.cobranca.resource;

import br.com.elyontec.cobranca.entity.Divida;
import br.com.elyontec.cobranca.service.IDividaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

@RestController
@RequestMapping("/dividas")
public class DividasResource implements Serializable {

    @Autowired
    private IDividaService dividaService;

    @GetMapping
    public ResponseEntity<Page<Divida>> todasDividas(Pageable pageable){
        Page<Divida> dividas = dividaService.todasDividas(pageable);
        return ResponseEntity.ok(dividas);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping("/importar-dados")
    public void importarDadosUpload(@RequestParam("file") MultipartFile file, ModelMap modelMap){
        dividaService.importarDivida(file);
    }
}
