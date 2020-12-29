package br.com.elyontec.cobranca.api.service;

import br.com.elyontec.cobranca.api.entity.Divida;

import java.util.List;

public interface IDividaService {

    public void cadastrarDividas(List<Divida> dividas);

}
