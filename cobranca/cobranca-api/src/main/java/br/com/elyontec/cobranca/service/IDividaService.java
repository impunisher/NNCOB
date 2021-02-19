package br.com.elyontec.cobranca.service;

import br.com.elyontec.cobranca.entity.Divida;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

public interface IDividaService {

    Page<Divida> todasDividas(Pageable pageable);

    void importarDivida(MultipartFile file);
}
