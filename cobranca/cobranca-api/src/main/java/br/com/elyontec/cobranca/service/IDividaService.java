package br.com.elyontec.cobranca.service;

import br.com.elyontec.cobranca.entity.Divida;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IDividaService {

    List<Divida> todasDividas();

    void importarDivida(MultipartFile file);
}
