package br.com.elyontec.cobranca.repository;

import br.com.elyontec.cobranca.entity.Divida;
import org.springframework.data.repository.CrudRepository;

public interface DividaRepository extends CrudRepository<Divida, Long> {
}
