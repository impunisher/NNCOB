package br.com.elyontec.cobranca.api.service.impl;

import br.com.elyontec.cobranca.api.entity.Divida;
import br.com.elyontec.cobranca.api.repository.DividaRepository;
import br.com.elyontec.cobranca.api.service.IDividaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DividaService implements IDividaService {

    @Autowired
    private DividaRepository dividaRepository;

    @Override
    @Transactional
    public void cadastrarDividas(List<Divida> dividas) {
        dividaRepository.saveAll(dividas);
    }
}
