package br.com.elyontec.cobranca.repository;

import br.com.elyontec.cobranca.entity.Divida;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface DividaRepository extends PagingAndSortingRepository<Divida, Long> {

}
