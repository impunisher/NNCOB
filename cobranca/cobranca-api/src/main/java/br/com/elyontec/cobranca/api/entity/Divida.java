package br.com.elyontec.cobranca.api.entity;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
public class Divida {

    private Long data;

    private LocalDate dataRemessa;

    private String descricaoCBO;

    private Long contrato;

    private LocalDate dataEnquadramento;

    private Integer diasAtraso;

    private BigDecimal valorEnquadramento;

    private BigDecimal saldoAtual;

    private LocalDate dataRetirada;

    private String produto;

    private Boolean contratoAjuizado;

    private Boolean cooperadoAtivo;

    private InstituicaoEnum instituicao;

}
